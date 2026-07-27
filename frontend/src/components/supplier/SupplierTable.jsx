import DataTable from "../ui/DataTable";

function SupplierTable({
  suppliers,
  onEdit,
  onDelete,
}) {
  const columns = [
    {
      header: "Name",
      key: "name",
    },
    {
      header: "Phone",
      key: "phone",
    },
    {
      header: "Email",
      key: "email",
    },
    {
      header: "Address",
      key: "address",
    },
    {
      header: "Actions",
      key: "actions",
      render: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(row)}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(row.id)}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={suppliers}
    />
  );
}

export default SupplierTable;