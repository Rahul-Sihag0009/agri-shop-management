const prisma = require("../config/prisma");

const getSettings = async () => {
  let settings = await prisma.setting.findFirst();

  if (!settings) {
    settings = await prisma.setting.create({
      data: {
        shopName: "Agri Shop",
        ownerName: "",
        phone: "",
        email: "",
        address: "",
      },
    });
  }

  return settings;
};

const updateSettings = async (data) => {
  const settings = await prisma.setting.findFirst();

  return prisma.setting.update({
    where: {
      id: settings.id,
    },
    data,
  });
};

module.exports = {
  getSettings,
  updateSettings,
};