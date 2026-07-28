const express=require("express");

const router=express.Router();

const{
    getSalesReport
}=require("../controllers/reportController");

const protect = require("../middleware/authMiddleware");

router.get(
    "/sales",
    protect,
    getSalesReport
);

module.exports=router;