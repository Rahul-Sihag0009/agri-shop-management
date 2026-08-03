const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");

// ===================== Get Users =====================

const getUsers = async (shopId) => {
  return prisma.user.findMany({
    where: {
      shopId,
    },
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

// ===================== Create User =====================

const createUser = async (data, shopId) => {
  const existing = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existing) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role,
      shopId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
};

// ===================== Delete User =====================

const deleteUser = async (id, shopId) => {
  const user = await prisma.user.findFirst({
    where: {
      id: Number(id),
      shopId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.role === "ADMIN") {
    throw new Error("Admin account cannot be deleted");
  }

  return prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
};

// ===================== Change Password =====================

const changePassword = async (id, password, shopId) => {
  const user = await prisma.user.findFirst({
    where: {
      id: Number(id),
      shopId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      password: hashedPassword,
    },
  });
  
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  changePassword,
};