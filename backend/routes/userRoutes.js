const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminOnly");

const {
  getUsers,
  createUser,
  deleteUser,
  changePassword,
} = require("../controllers/userController");

router.get("/", protect, adminOnly, getUsers);

router.post("/", protect, adminOnly, createUser);

router.put("/:id/password", protect, adminOnly, changePassword);

router.delete("/:id", protect, adminOnly, deleteUser);

module.exports = router;