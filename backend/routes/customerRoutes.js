const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminOnly");

const {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  exportCustomerHistory,
} = require("../controllers/customerController");

router.get("/", protect, adminOnly, getCustomers);

router.get("/:id", protect, adminOnly, getCustomerById);

router.get(
  "/:id/export",
  protect,
  adminOnly,
  exportCustomerHistory
);

router.post("/", protect, adminOnly, createCustomer);

router.put("/:id", protect, adminOnly, updateCustomer);

router.delete("/:id", protect, adminOnly, deleteCustomer);

module.exports = router;