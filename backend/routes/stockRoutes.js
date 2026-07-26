const express = require("express");

const router = express.Router();

const {
  addStock,
} = require("../controllers/stockController");

router.post("/add", addStock);

module.exports = router;