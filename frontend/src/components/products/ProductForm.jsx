import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import api from "../../services/api";
import Button from "../ui/Button";
import Input from "../ui/Input";

function ProductForm({ onSuccess, initialData = null }) {
  const {
  register,
  handleSubmit,
  reset,
  formState: { isSubmitting },
} = useForm({
  defaultValues: initialData || {},
});

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
    try {
      if (initialData) {
  await api.put(`/products/${initialData.id}`, data);
  toast.success("Product Updated Successfully");
} else {
  await api.post("/products", data);
  toast.success("Product Added Successfully");
}

      toast.success("Product Added Successfully");

      reset();

      onSuccess();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4">

        <Input
          label="Product Name"
          {...register("productName", { required: true })}
        />

        <Input
          label="Category"
          {...register("category", { required: true })}
        />

        <Input
          label="Company"
          {...register("company", { required: true })}
        />

        <Input
          label="Batch Number"
          {...register("batchNumber", { required: true })}
        />

        <Input
          type="date"
          label="Expiry Date"
          {...register("expiryDate", { required: true })}
        />

        <Input
          type="number"
          label="Purchase Price"
          {...register("purchasePrice")}
        />

        <Input
          type="number"
          label="Selling Price"
          {...register("sellingPrice")}
        />

        <Input
          type="number"
          label="Quantity"
          {...register("quantity")}
        />

        <Input
          label="Unit"
          {...register("unit")}
        />

        <Input
          type="number"
          label="GST"
          {...register("gst")}
        />

        <Input
          label="HSN Code"
          {...register("hsnCode")}
        />

        <Input
          type="number"
          label="Minimum Stock"
          {...register("minimumStock")}
        />

      </div>

      <div className="mt-6 flex justify-end">
        <Button type="submit">
          {isSubmitting
  ? "Saving..."
  : initialData
  ? "Update Product"
  : "Save Product"}
        </Button>
      </div>
    </form>
  );
}

export default ProductForm;