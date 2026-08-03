const prisma = require("../config/prisma");

// Get all customers
const getCustomers = async (shopId) => {
  return prisma.customer.findMany({
    where: {
      shopId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Get customer by ID
const getCustomerById = async (shopId, id) => {
  return prisma.customer.findFirst({
    where: {
      id: Number(id),
      shopId,
    },
  });
};

// Create customer
const createCustomer = async (shopId, data) => {
  return prisma.customer.create({
    data: {
      shopId,
      name: data.name,
      phone: data.phone,
      address: data.address,
    },
  });
};

// Update customer
const updateCustomer = async (shopId, id, data) => {
  return prisma.customer.update({
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
const deleteCustomer = async (shopId, id) => {
  return prisma.customer.delete({
    where: {
      id: Number(id),
    },
  });
};

const exportCustomerHistory = async (shopId, customerId) => {
  const customer = await prisma.customer.findFirst({
    where: {
      id: Number(customerId),
      shopId,
    },
    include: {
      sales: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });

  if (!customer) {
    throw new Error("Customer not found");
  }

  return customer.sales.map((sale) => ({
    customerName: customer.name,
    mobile: customer.phone,
    billNo: sale.invoiceNumber,
    purchaseDate: sale.createdAt,
    products: sale.items
      .map((item) => item.product.productName)
      .join(", "),
    amount: sale.grandTotal,
  }));
  
};

module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  exportCustomerHistory,

};
