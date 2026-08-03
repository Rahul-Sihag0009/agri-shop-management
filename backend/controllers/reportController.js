const reportService = require("../services/reportService");

// ===========================
// Sales Report
// ===========================
const getSalesReport = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.query;

    const report = await reportService.getSalesReport(
      req.user.shopId,
      startDate,
      endDate
    );

    res.json(report);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getSalesReport,
};