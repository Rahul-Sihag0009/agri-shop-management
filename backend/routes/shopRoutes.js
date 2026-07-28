const express = require("express");

const router = express.Router();

const {
  getShop,
  updateShop,
  uploadLogo,
} = require("../controllers/shopController");

const upload = require("../middleware/upload");
router.get("/", getShop);

router.put("/", updateShop);

router.post(
  "/logo",
  upload.single("logo"),
  uploadLogo
);

module.exports = router;