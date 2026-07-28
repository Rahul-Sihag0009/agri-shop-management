const prisma = require("../config/prisma");

// Get all customers
const getCustomers = async () => {
  return await prisma.customer.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Get customer by ID
const getCustomerById = async (id) => {
  return await prisma.customer.findUnique({
    where: {
      id: Number(id),
    },
  });
};

// Create customer
const createCustomer = async (data) => {
  return await prisma.customer.create({
    data: {
      name: data.name,
      phone: data.phone,
      address: data.address,
    },
  });
};

// Update customer
const updateCustomer = async (id, data) => {
  return await prisma.customer.update({
    where: {
      id: Number(id),
    },
    data: {
      name: data.name,
      phone: data.phone,
      address: data.address,
    },
  });
};

// Delete customer
const deleteCustomer = async (id) => {
  return await prisma.customer.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};