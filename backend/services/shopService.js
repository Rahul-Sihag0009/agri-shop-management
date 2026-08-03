const prisma = require("../config/prisma");

// ===========================
// Get Shop
// ===========================
const getShop = async (shopId) => {
  return prisma.shop.findUnique({
    where: {
      id: shopId,
    },
  });
};

// ===========================
// Update Shop
// ===========================
const updateShop = async (shopId, data) => {
  return prisma.shop.update({
    where: {
      id: shopId,
    },
    data,
  });
};

// ===========================
// Upload Logo
// ===========================
const uploadLogo = async (shopId, logoPath) => {
  return prisma.shop.update({
    where: {
      id: shopId,
    },
    data: {
      logo: logoPath,
    },
  });
  
};

module.exports = {
  getShop,
  updateShop,
  uploadLogo,
};