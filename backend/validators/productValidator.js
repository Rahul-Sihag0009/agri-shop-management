const { z } = require("zod");

const productSchema = z.object({
  productName: z.string().min(2, "Product name is required"),
  category: z.string().min(2),
  company: z.string().min(2),
  batchNumber: z.string().min(2),

  expiryDate: z.string(),

  purchasePrice: z.coerce.number().nonnegative(),

  sellingPrice: z.coerce.number().nonnegative(),

  quantity: z.coerce.number().int().nonnegative(),

  unit: z.string().min(1),

  gst: z.coerce.number().min(0).max(100),

  hsnCode: z.string().min(1),

  minimumStock: z.coerce.number().int().nonnegative(),
});

module.exports = productSchema;