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
  value={customer.phone}
  onChange={(e) => {

    const value = e.target.value;

    // allow only numbers
    if (/^\d*$/.test(value)) {
      setCustomer({
        ...customer,
        phone: value,
      });
    }

  }}
  maxLength="10"
  placeholder="Mobile Number"
  className="border rounded-lg p-3"
/>

      </div>

    </div>
  );
}

export default CustomerForm;