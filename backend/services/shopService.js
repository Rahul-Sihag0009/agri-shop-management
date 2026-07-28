const prisma = require("../config/prisma");

const getShop = async () => {
  let shop = await prisma.shop.findFirst();

  if (!shop) {
    shop = await prisma.shop.create({
      data: {
        shopName: "Agri Shop",
        ownerName: "",
        phone: "",
        email: "",
        address: "",
        gstNumber: "",
        invoicePrefix: "INV",
        currency: "₹",
      },
    });
  }

  return shop;
};

const updateShop = async (data) => {
  let shop = await prisma.shop.findFirst();

  if (!shop) {
    shop = await prisma.shop.create({
      data: {
        shopName: "Agri Shop",
        ownerName: "",
        phone: "",
        email: "",
        address: "",
        gstNumber: "",
        invoicePrefix: "INV",
        currency: "₹",
      },
    });
  }

  return prisma.shop.update({
    where: {
      id: shop.id,
    },
    data,
  });
};

const uploadLogo = async (logoPath) => {

  let shop = await prisma.shop.findFirst();

  if (!shop) {

    shop = await prisma.shop.create({
      data: {
        shopName: "Agri Shop",
        ownerName: "",
        phone: "",
        email: "",
        address: "",
        gstNumber: "",
        invoicePrefix: "INV",
        currency: "₹",
      },
    });

  }

  return prisma.shop.update({
    where: {
      id: shop.id,
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