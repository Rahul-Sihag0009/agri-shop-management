const supplierService = require("../services/supplierService");

const getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await supplierService.getSuppliers();

    res.json({
      success: true,
      suppliers,
    });
  } catch (err) {
    next(err);
  }
};

const getSupplierById = async (req, res, next) => {
  try {
    const supplier = await supplierService.getSupplierById(req.params.id);

    if (!supplier) {
      return res.status(404).json({
        success: false,
        message: "Supplier not found",
      });
    }

    res.json({
      success: true,
      supplier,
    });
  } catch (err) {
    next(err);
  }
};

const createSupplier = async (req, res, next) => {
  try {
    const supplier = await supplierService.createSupplier(req.body);

    res.status(201).json({
      success: true,
      message: "Supplier created successfully",
      supplier,
    });
  } catch (err) {
    next(err);
  }
};

const updateSupplier = async (req, res, next) => {
  try {
    const supplier = await supplierService.updateSupplier(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: "Supplier updated successfully",
      supplier,
    });
  } catch (err) {
    next(err);
  }
};

const deleteSupplier = async (req, res, next) => {
  try {
    await supplierService.deleteSupplier(req.params.id);

    res.json({
      success: true,
      message: "Supplier deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};