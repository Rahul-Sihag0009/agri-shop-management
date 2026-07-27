import { useState, useEffect } from "react";

function SupplierForm({ onSubmit, editingSupplier }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (editingSupplier) {
      setForm(editingSupplier);
    }
  }, [editingSupplier]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);

    setForm({
      name: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-5"
    >
      <h2 className="text-xl font-bold mb-5">
        Supplier
      </h2>

      <input
        className="border p-3 w-full mb-3 rounded"
        placeholder="Supplier Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        className="border p-3 w-full mb-3 rounded"
        placeholder="Phone"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        className="border p-3 w-full mb-3 rounded"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <textarea
        className="border p-3 w-full mb-3 rounded"
        placeholder="Address"
        name="address"
        value={form.address}
        onChange={handleChange}
      />

      <button className="bg-green-600 text-white px-5 py-3 rounded">
        {editingSupplier ? "Update Supplier" : "Add Supplier"}
      </button>
    </form>
  );
}

export default SupplierForm;