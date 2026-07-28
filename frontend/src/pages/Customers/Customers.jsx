import { useState } from "react";

import PageHeader from "../../components/ui/PageHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import SearchBox from "../../components/ui/SearchBox";

import CustomerTable from "../../components/customer/CustomerTable";
import CustomerModal from "../../components/customer/CustomerModal";

import { FaPlus } from "react-icons/fa";

import useCustomers from "../../hooks/useCustomers";
import useCustomerMutation from "../../hooks/useCustomerMutation";
import CustomerStats from "../../components/customer/CustomerStats";
import { FaEdit, FaTrash } from "react-icons/fa";

function Customers() {
  const { customers } = useCustomers();

  const {
    createMutation,
    updateMutation,
    deleteMutation,
  } = useCustomerMutation();

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase()) ||
    customer.phone.includes(search)
  );

  const handleSubmit = (data) => {
    if (selectedCustomer) {
      updateMutation.mutate({
        id: selectedCustomer.id,
        data,
      });
    } else {
      createMutation.mutate(data);
    }

    setOpen(false);
    setSelectedCustomer(null);
  };

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this customer?")) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <div className="p-6">
      <PageHeader
        title="Customers"
        subtitle="Manage all your customers"
        action={
          <Button
            onClick={() => {
              setSelectedCustomer(null);
              setOpen(true);
            }}
          >
            <FaPlus className="inline mr-2" />
            Add Customer
          </Button>
        }
      />
      <CustomerStats customers={customers} />

      <Card className="mb-6">
        <SearchBox
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search customer..."
        />
      </Card>

      <Card>
        <CustomerTable
          customers={filteredCustomers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Card>

      <CustomerModal
        open={open}
        customer={selectedCustomer}
        onClose={() => {
          setOpen(false);
          setSelectedCustomer(null);
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Customers;