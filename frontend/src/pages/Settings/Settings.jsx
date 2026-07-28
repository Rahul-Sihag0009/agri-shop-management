import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Loading from "../../components/ui/Loading";

import useSettings from "../../hooks/useSettings";
import useUpdateSettings from "../../hooks/useUpdateSettings";

function Settings() {
  const { data, isLoading } = useSettings();

  const updateMutation = useUpdateSettings();

  const [form, setForm] = useState({
    shopName: "",
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    gstNumber: "",
    invoicePrefix: "",
    currency: "",
  });

  useEffect(() => {
    if (data) {
      setForm(data);
    }
  }, [data]);

  if (isLoading) return <Loading />;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation.mutate(form);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-6">
          Shop Settings
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <input
            name="shopName"
            placeholder="Shop Name"
            value={form.shopName}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="ownerName"
            placeholder="Owner Name"
            value={form.ownerName}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="gstNumber"
            placeholder="GST Number"
            value={form.gstNumber ?? ""}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="invoicePrefix"
            placeholder="Invoice Prefix"
            value={form.invoicePrefix}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="currency"
            placeholder="Currency"
            value={form.currency}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="border rounded-lg p-3 md:col-span-2"
            rows={4}
          />

          <button
            type="submit"
            className="bg-green-600 text-white rounded-lg py-3 md:col-span-2 hover:bg-green-700"
          >
            Save Settings
          </button>
        </form>

      </div>
    </Layout>
  );
}

export default Settings;