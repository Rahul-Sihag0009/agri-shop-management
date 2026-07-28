import { useState, useEffect } from "react";
import Button from "../ui/Button";

function CustomerForm({
  initialData,
  onSubmit,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPhone(initialData.phone);
      setAddress(initialData.address || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      phone,
      address,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        className="border p-3 rounded-lg w-full"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="border p-3 rounded-lg w-full"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <textarea
        className="border p-3 rounded-lg w-full"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <Button type="submit">
        Save Customer
      </Button>
    </form>
  );
}

export default CustomerForm;