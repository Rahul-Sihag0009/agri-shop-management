const express = require("express");

const router = express.Router();

const {
  createSale,
} = require("../controllers/saleController");

router.post("/", createSale);
router.get("/:id", getSaleById);
module.exports = router;