const prisma = require("../config/prisma");

const getSuppliers = async () => {
  return prisma.supplier.findMany({
    orderBy: {
      name: "asc",
    },
  });
};

const getSupplierById = async (id) => {
  return prisma.supplier.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const createSupplier = async (data) => {
  return prisma.supplier.create({
    data,
  });
};

const updateSupplier = async (id, data) => {
  return prisma.supplier.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

const deleteSupplier = async (id) => {
  return prisma.supplier.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  getSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};