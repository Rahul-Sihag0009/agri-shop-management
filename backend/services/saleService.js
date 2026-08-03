const prisma = require("../config/prisma");
const generateInvoiceNumber = require("../utils/invoiceGenerator");

const createSale = async (shopId, { customer, paymentMode, items }) => {
  if (customer?.phone) {
    if (!/^[6-9]\d{9}$/.test(customer.phone)) {

      throw new Error("Invalid mobile number");

    }

  }

  return prisma.$transaction(async (tx) => {
    
    let customerRecord = null;

    // ==========================
    // Find/Create Customer
    // ==========================
    if (customer?.phone) {
      customerRecord = await tx.customer.findFirst({
        where: {
          shopId,
          phone: customer.phone,
        },
      });

      if (!customerRecord) {
        customerRecord = await tx.customer.create({
          data: {
            shopId,
            name: customer.name,
            phone: customer.phone,
            address: customer.address || "",
          },
        });
      }
    }

    let subtotal = 0;
    let gst = 0;

    const productData = [];

    // ==========================
    // Validate Products
    // ==========================
    for (const item of items) {
      const product = await tx.product.findFirst({
        where: {
          id: item.productId,
          shopId,
        },
      });

      if (!product) {
        throw new Error("Product not found");
      }

      if (product.quantity < item.quantity) {
        throw new Error(
          `${product.productName} has only ${product.quantity} items in stock.`
        );
      }

      const total = product.sellingPrice * item.quantity;

      const itemGST =
        (product.purchasePrice *
          item.quantity *
          product.gst) /
        100;

      subtotal += total;
      gst += itemGST;

      productData.push({
        product,
        quantity: item.quantity,
        total,
      });
    }

    // ==========================
    // Shop Details
    // ==========================
    const shop = await tx.shop.findUnique({
      where: {
        id: shopId,
      },
    });

    // ==========================
    // Invoice Sequence
    // ==========================
    const lastSale = await tx.sale.findFirst({
      where: {
        shopId,
      },
      orderBy: {
        invoiceSequence: "desc",
      },
    });

    const nextSequence = lastSale
      ? lastSale.invoiceSequence + 1
      : 1;

    const invoiceNumber = generateInvoiceNumber(
      shop?.invoicePrefix || "INV",
      nextSequence
    );

    // ==========================
    // Create Sale
    // ==========================
    const sale = await tx.sale.create({
      data: {
        shopId,
        invoiceNumber,
        invoiceSequence: nextSequence,
        customerId: customerRecord?.id,
        paymentMode,
        subtotal,
        gst,
        grandTotal: subtotal + gst,
      },
    });

    // ==========================
    // Sale Items + Stock Update
    // ==========================
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

const getSaleById = async (shopId, id) => {
  return prisma.sale.findFirst({
    where: {
      id: Number(id),
      shopId,
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