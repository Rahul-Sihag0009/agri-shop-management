function CustomerForm({
  customer,
  setCustomer,
}) {

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white shadow rounded p-4 mb-5">

      <h2 className="text-xl font-bold mb-4">
        Customer Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          name="name"
          placeholder="Customer Name"
          className="border rounded p-3"
          value={customer.name}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="border rounded p-3"
          value={customer.phone}
          onChange={handleChange}
        />

      </div>

    </div>
  );
}

export default CustomerForm;