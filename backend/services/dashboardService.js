const prisma = require("../config/prisma");

// ================= Dashboard Stats =================
const getDashboardStats = async (shopId) => {
  const totalProducts = await prisma.product.count({
    where: {
      shopId,
    },
  });

  const lowStock = await prisma.product.count({
    where: {
      shopId,
      quantity: {
        lte: 5,
      },
    },
  });

  const outOfStock = await prisma.product.count({
    where: {
      shopId,
      quantity: 0,
    },
  });

  const totalCustomers = await prisma.customer.count({
    where: {
      shopId,
    },
  });

  const totalSales = await prisma.sale.count({
    where: {
      shopId,
    },
  });

  const revenue = await prisma.sale.aggregate({
    where: {
      shopId,
    },
    _sum: {
      grandTotal: true,
    },
  });

  return {
    totalProducts,
    lowStock,
    outOfStock,
    totalCustomers,
    totalSales,
    revenue: revenue._sum.grandTotal || 0,
  };
};

// ================= Recent Sales =================
const getRecentSales = async (shopId) => {
  return prisma.sale.findMany({
    where: {
      shopId,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
    include: {
      customer: true,
    },
  });
};

// ================= Low Stock =================
const getLowStockProducts = async (shopId) => {
  return prisma.product.findMany({
    where: {
      shopId,
      quantity: {
        lte: 5,
      },
    },
    orderBy: {
      quantity: "asc",
    },
  });
};

// ================= Top Selling =================
const getTopSellingProducts = async (shopId) => {
  const sales = await prisma.sale.findMany({
    where: {
      shopId,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  const map = {};

  sales.forEach((sale) => {
    sale.items.forEach((item) => {
      if (!map[item.productId]) {
        map[item.productId] = {
          id: item.productId,
          productName: item.product.productName,
          quantitySold: 0,
        };
      }

      map[item.productId].quantitySold += item.quantity;
    });
  });

  return Object.values(map)
    .sort((a, b) => b.quantitySold - a.quantitySold)
    .slice(0, 5);
};

// ================= Monthly Sales =================
const getMonthlySales = async (shopId) => {
  const sales = await prisma.sale.findMany({
    where: {
      shopId,
    },
    select: {
      createdAt: true,
      grandTotal: true,
    },
  });

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec",
  ];

  const result = months.map((month) => ({
    month,
    sales: 0,
  }));

  sales.forEach((sale) => {
    const monthIndex = new Date(sale.createdAt).getMonth();
    
    result[monthIndex].sales += sale.grandTotal;
  });

  return result;
};

module.exports = {
  getDashboardStats,
  getRecentSales,
  getLowStockProducts,
  getTopSellingProducts,
  getMonthlySales,
};