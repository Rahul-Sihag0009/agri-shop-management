const authService = require("../services/authService");

// ================= REGISTER =================
const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      shop: result.shop,
      user: result.user,
    });
  } catch (err) {
    next(err);
  }
};

// ================= LOGIN =================
const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);

    res.json({
      success: true,
      ...result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
};