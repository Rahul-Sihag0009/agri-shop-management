const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorHandler");
const stockRoutes = require("./routes/stockRoutes");
const saleRoutes = require("./routes/saleRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const reportRoutes =
require("./routes/reportRoutes");
const customerRoutes = require("./routes/customerRoutes");
const authRoutes = require("./routes/authRoutes");
const settingRoutes = require("./routes/settingRoutes");
const userRoutes = require("./routes/userRoutes");
const shopRoutes = require("./routes/shopRoutes");
dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://agri-shop-management.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
const path = require("path");

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);
app.use("/api/products", productRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/sales", saleRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use(
    "/api/reports",
    reportRoutes
);
app.use("/api/customers", customerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/settings", settingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/shop", shopRoutes);
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Agri Shop Backend Running Successfully 🚀"
    });
});

app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});