import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import ProductForm from "../../components/products/ProductForm";
import ProductTable from "../../components/products/ProductTable";
import api from "../../services/api";
import useProducts from "../../hooks/useProducts";
import PageHeader from "../../components/ui/PageHeader";
import SearchBox from "../../components/ui/SearchBox";
import { FaPlus } from "react-icons/fa";
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

    alert("Product deleted successfully.");

    try {
      refresh();
    } catch (err) {
      console.log("Refresh Error:", err);
    }

  } catch (error) {
    console.log("Delete Error:", error);

    alert(
      error.response?.data?.message || "Unable to delete product."
    );
  }
};

  return (
    <Layout>
      <PageHeader
  title="Products"
  subtitle="Manage your inventory products"
  action={
    <Button
      onClick={() => {
        setEditingProduct(null);
        setOpen(true);
      }}
    >
      <FaPlus className="inline mr-2" />
      Add Product
    </Button>
  }
/>

      <Card className="mb-6">

  <SearchBox
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search by product name..."
  />

</Card>

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