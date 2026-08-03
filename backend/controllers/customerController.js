const customerService = require("../services/customerService");

// GET /api/customers
const getCustomers = async (req, res, next) => {
  try {
    const customers = await customerService.getCustomers(
      req.user.shopId
    );

    res.status(200).json({
      success: true,
      customers,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/customers/:id
const getCustomerById = async (req, res, next) => {
  try {
    const customer = await customerService.getCustomerById(
      req.user.shopId,
      req.params.id
    );

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    res.status(200).json({
      success: true,
      customer,
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/customers
const createCustomer = async (req, res, next) => {
  try {
    const customer = await customerService.createCustomer(
      req.user.shopId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: "Customer created successfully",
      customer,
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/customers/:id
const updateCustomer = async (req, res, next) => {
  try {
    const customer = await customerService.updateCustomer(
      req.user.shopId,
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Customer updated successfully",
      customer,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/customers/:id
const deleteCustomer = async (req, res, next) => {
  try {
    await customerService.deleteCustomer(
      req.user.shopId,
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Customer deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// EXPORT CUSTOMER HISTORY
const exportCustomerHistory = async (req, res, next) => {
  try {
    const history = await customerService.exportCustomerHistory(
      req.user.shopId,
      req.params.id
    );

    res.json(history);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  exportCustomerHistory,
};