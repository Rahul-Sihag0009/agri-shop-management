import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Loading from "../../components/ui/Loading";

import useShop from "../../hooks/useShop";
import useUpdateShop from "../../hooks/useUpdateShop";
import useUploadLogo from "../../hooks/useUploadLogo";

function Settings() {
  const { data, isLoading } = useShop();

  const updateMutation = useUpdateShop();

  const uploadLogoMutation = useUploadLogo();

const [selectedLogo, setSelectedLogo] = useState(null);

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

  const handleLogoUpload = () => {
  if (!selectedLogo) return;

  uploadLogoMutation.mutate(selectedLogo);
};

  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-6">
          Shop Settings
        </h1>

        <div className="mb-8 border rounded-xl p-6 bg-gray-50">

          <h2 className="text-xl font-semibold mb-4">
          Shop Logo
          </h2>

        <div className="flex flex-col md:flex-row items-center gap-6">

      <div>

        {data?.logo ? (

        <img
  src={`http://localhost:5000${data.logo}`}
  alt="Shop Logo"
  className="w-40 h-40 rounded-xl border bg-white p-2 object-contain shadow"
/>

      ) : (

        <div className="w-36 h-36 border rounded-lg flex items-center justify-center text-gray-400 bg-white">
          No Logo
        </div>

      )}

    </div>

    <div className="flex flex-col gap-3">

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setSelectedLogo(e.target.files[0])}
      />

      <button
        type="button"
        onClick={handleLogoUpload}
        disabled={uploadLogoMutation.isPending}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
      >
        {uploadLogoMutation.isPending
          ? "Uploading..."
          : "Upload Logo"}
      </button>

    </div>

  </div>

</div>

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