import useSuppliers from "../../hooks/useSuppliers";

function SupplierSelect({ value, onChange }) {
  const { data: suppliers = [], isLoading } = useSuppliers();

  return (
    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-xl font-bold mb-4">
        Supplier
      </h2>

      <select
        className="w-full border rounded p-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">
          Select Supplier
        </option>

        {!isLoading &&
          suppliers.map((supplier) => (
            <option
              key={supplier.id}
              value={supplier.id}
            >
              {supplier.name}
            </option>
          ))}
      </select>

    </div>
  );
}

export default SupplierSelect;