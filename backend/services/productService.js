const prisma = require("../config/prisma");

const createProduct = async (data) => {
  const existing = await prisma.product.findFirst({
    where: {
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
      expiryDate: new Date(data.expiryDate),
    },
  });
};

const getAllProducts = async (search = "") => {
  return prisma.product.findMany({
    where: {
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

const getProductById = async (id) => {
  return prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const updateProduct = async (id, data) => {
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

const deleteProduct = async (id) => {
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