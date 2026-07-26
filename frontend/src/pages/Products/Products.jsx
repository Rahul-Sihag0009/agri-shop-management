import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import ProductForm from "../../components/products/ProductForm";
import ProductTable from "../../components/products/ProductTable";
import api from "../../services/api";
import useProducts from "../../hooks/useProducts";

function Products() {
  
  
  const [search, setSearch] = useState("");
  const {
  products,
  loading,
  refresh,
} = useProducts(search);
  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  

const deleteProduct = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  try {
    await api.delete(`/products/${id}`);

    refresh();
  } catch (error) {
    console.error(error);
  }
};

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>

        <Button
  onClick={() => {
    setEditingProduct(null);
    setOpen(true);
  }}
>
          + Add Product
        </Button>
      </div>

      <div className="mb-6">
  <input
    type="text"
    placeholder="Search by product, company or category..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full md:w-96 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
  />
</div>

      <Card>
        <ProductTable
  products={products}
  onEdit={(product) => {
    setEditingProduct(product);
    setOpen(true);
  }}
  onDelete={deleteProduct}
/>
      </Card>

      <Modal
        open={open}
        title="Add Product"
        onClose={() => setOpen(false)}
      >
        <ProductForm
  initialData={editingProduct}
  onSuccess={() => {
  setOpen(false);
  setEditingProduct(null);
  refresh();
}}
/>
      </Modal>
    </Layout>
  );
}

export default Products;