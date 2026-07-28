const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");

const getUsers = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
};

const deleteUser = async (id) => {
  return prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
};