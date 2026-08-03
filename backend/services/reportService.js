const prisma = require("../config/prisma");

// ===========================
// Sales Report
// ===========================
const getSalesReport = async (
  shopId,
  startDate,
  endDate
) => {
  return prisma.sale.findMany({
    where: {
      shopId,

      createdAt: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    },

    include: {
      customer: true,

      items: {
        include: {
          product: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
};

module.exports = {
  getSalesReport,
};