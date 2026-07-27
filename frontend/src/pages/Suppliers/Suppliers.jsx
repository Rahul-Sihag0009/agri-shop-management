import Layout from "../../components/layout/Layout";
import useSuppliers from "../../hooks/useSuppliers";

function Suppliers() {
  const {
    data: suppliers,
    isLoading,
    error,
  } = useSuppliers();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading suppliers</div>;

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Suppliers</h1>

      {suppliers.map((supplier) => (
        <div key={supplier.id}>
          {supplier.name}
        </div>
      ))}
    </Layout>
  );
}

export default Suppliers;