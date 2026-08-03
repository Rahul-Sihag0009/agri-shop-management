const prisma = require("../config/prisma");

// ===========================
// Create Product
// ===========================
const createProduct = async (shopId, data) => {
  const existing = await prisma.product.findFirst({
    where: {
      shopId,
      batchNumber: data.batchNumber,
    },
  });

  if (existing) {
    const error = new Error("Batch Number already exists.");
    error.statusCode = 409;
    throw error;
  }

  return prisma.product.create({
    data: {
      ...data,
      shopId,
      expiryDate: new Date(data.expiryDate),
    },
  });
};

// ===========================
// Get All Products
// ===========================
const getAllProducts = async (shopId, search = "") => {
  return prisma.product.findMany({
    where: {
      shopId,
      OR: [
        {
          productName: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          company: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          category: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// ===========================
// Get Single Product
// ===========================
const getProductById = async (shopId, id) => {
  return prisma.product.findFirst({
    where: {
      id: Number(id),
      shopId,
    },
  });
};

// ===========================
// Update Product
// ===========================
const updateProduct = async (shopId, id, data) => {
  const existing = await prisma.product.findFirst({
    where: {
      id: Number(id),
      shopId,
    },
  });

  if (!existing) {
    throw new Error("Product not found");
  }

  const duplicate = await prisma.product.findFirst({
    where: {
      shopId,
      batchNumber: data.batchNumber,
      NOT: {
        id: Number(id),
      },
    },
  });

  if (duplicate) {
    const error = new Error("Batch Number already exists.");
    error.statusCode = 409;
    throw error;
  }

  return prisma.product.update({
    where: {
      id: Number(id),
    },
    data: {
      ...data,
      expiryDate: new Date(data.expiryDate),
    },
  });
};

// ===========================
// Delete Product
// ===========================
const deleteProduct = async (shopId, id) => {
  const existing = await prisma.product.findFirst({
    where: {
      id: Number(id),
      shopId,
    },
  });

  if (!existing) {
    throw new Error("Product not found");
  }

  return prisma.product.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};