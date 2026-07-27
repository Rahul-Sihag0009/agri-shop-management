const prisma = require("../config/prisma");
const generatePurchaseNumber = require("../utils/purchaseNumberGenerator");

const createPurchase = async ({
  supplierId,
  items,
}) => {

  return prisma.$transaction(async (tx) => {

    let totalAmount = 0;

    const purchaseItems = [];

    for (const item of items) {

      const product = await tx.product.findUnique({
        where: {
          id: item.productId,
        },
      });

      if (!product) {
        throw new Error(`Product ${item.productId} not found`);
      }

      const total = item.costPrice * item.quantity;

      totalAmount += total;

      purchaseItems.push({
        product,
        quantity: item.quantity,
        costPrice: item.costPrice,
        total,
      });

    }

    const purchase = await tx.purchase.create({
      data: {
        invoiceNo: generatePurchaseNumber(),
        supplierId,
        totalAmount,
      },
    });

    for (const item of purchaseItems) {

      await tx.purchaseItem.create({
        data: {
          purchaseId: purchase.id,
          productId: item.product.id,
          quantity: item.quantity,
          costPrice: item.costPrice,
          total: item.total,
        },
      });

      await tx.product.update({
        where: {
          id: item.product.id,
        },
        data: {
          quantity: {
            increment: item.quantity,
          },
        },
      });

      await tx.stockHistory.create({
        data: {
          productId: item.product.id,
          quantity: item.quantity,
          type: "IN",
          reason: "PURCHASE",
          remarks: purchase.invoiceNo,
        },
      });

    }

    return purchase;

  });

};

module.exports = {
  createPurchase,
};