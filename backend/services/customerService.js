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

const exportCustomerHistory = async (customerId) => {
  const customer = await prisma.customer.findUnique({
    where: {
      id: Number(customerId),
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

  const history = customer.sales.map((sale) => ({
    customerName: customer.name,
    mobile: customer.phone,
    billNo: sale.invoiceNumber,
    purchaseDate: sale.createdAt,
    products: sale.items
      .map((item) => item.product.productName)
      .join(", "),
    amount: sale.grandTotal,
  }));

  return history;
};

module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  exportCustomerHistory,
  
};