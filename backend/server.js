const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorHandler");
const stockRoutes = require("./routes/stockRoutes");
const saleRoutes = require("./routes/saleRoutes");
dotenv.config();

const app = express();

app.use(cors());
app.use(errorHandler);
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/sales", saleRoutes);
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Agri Shop Backend Running Successfully 🚀"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});