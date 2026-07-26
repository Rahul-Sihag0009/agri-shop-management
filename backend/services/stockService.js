const prisma = require("../config/prisma");

const addStock = async ({
  productId,
  quantity,
  remarks,
  reason,
}) => {
  return prisma.$transaction(async (tx) => {
    const product = await tx.product.findUnique({
      where: {
        id: Number(productId),
      },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    const updatedProduct = await tx.product.update({
      where: {
        id: Number(productId),
      },
      data: {
        quantity: {
          increment: Number(quantity),
        },
      },
    });

    await tx.stockHistory.create({
      data: {
        productId: Number(productId),
        quantity: Number(quantity),
        type: "IN",
        reason,
        remarks,
      },
    });

    return updatedProduct;
  });
};

module.exports = {
  addStock,
};