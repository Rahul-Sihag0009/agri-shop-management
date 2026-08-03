const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ================= REGISTER =================
const register = async ({
  name,
  email,
  password,
  shopName,
  phone,
  address,
}) => {
  // Check if email already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create Shop
  const shop = await prisma.shop.create({
    data: {
      shopName,
      ownerName: name,
      phone,
      email,
      address,
    },
  });

  // Create Admin User
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: "ADMIN",
      shopId: shop.id,
    },
  });

  return {
    shop,
    user,
  };
};

// ================= LOGIN =================
const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      id: user.id,
      shopId: user.shopId,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      
      email: user.email,
      role: user.role,
      shopId: user.shopId,
    },
  };
};

module.exports = {
  register,
  login,
};