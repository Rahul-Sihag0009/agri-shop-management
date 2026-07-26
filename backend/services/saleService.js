const prisma = require("../config/prisma");
const generateInvoiceNumber = require("../utils/invoiceGenerator");

const createSale = async ({ customer, paymentMode, items }) => {
  return prisma.$transaction(async (tx) => {

    let customerRecord = null;

    // Find or Create Customer
    if (customer?.phone) {
      customerRecord = await tx.customer.findUnique({
        where: {
          phone: customer.phone,
        },
      });

      if (!customerRecord) {
        customerRecord = await tx.customer.create({
          data: {
            name: customer.name,
            phone: customer.phone,
          },
        });
      }
    }

    let subtotal = 0;
    let gst = 0;

    const productData = [];

    // Validate Products
    for (const item of items) {

      const product = await tx.product.findUnique({
        where: {
          id: item.productId,
        },
      });

      if (!product) {
        throw new Error(`Product ID ${item.productId} not found.`);
      }

      if (product.quantity < item.quantity) {
        throw new Error(
          `${product.productName} has only ${product.quantity} items in stock.`
        );
      }

      const total = product.sellingPrice * item.quantity;

      subtotal += total;

      gst += total * product.gst / 100;

      productData.push({
        product,
        quantity: item.quantity,
        total,
      });
    }

    const sale = await tx.sale.create({
      data: {
        invoiceNumber: generateInvoiceNumber(),
        customerId: customerRecord?.id,
        paymentMode,
        subtotal,
        gst,
        grandTotal: subtotal + gst,
      },
    });

    for (const item of productData) {

      await tx.saleItem.create({
        data: {
          saleId: sale.id,
          productId: item.product.id,
          quantity: item.quantity,
          price: item.product.sellingPrice,
          total: item.total,
        },
      });

      await tx.product.update({
        where: {
          id: item.product.id,
        },
        data: {
          quantity: {
            decrement: item.quantity,
          },
        },
      });

      await tx.stockHistory.create({
        data: {
          productId: item.product.id,
          quantity: item.quantity,
          type: "OUT",
          reason: "SALE",
          remarks: sale.invoiceNumber,
        },
      });

    }

    return sale;

  });
};

const getSaleById = async (id) => {

  return prisma.sale.findUnique({

    where: {
      id: Number(id),
    },

    include: {

      customer: true,

      items: {

        include: {

          product: true,

        },

      },

    },

  });

};

module.exports = {
  createSale,
  getSaleById,
};