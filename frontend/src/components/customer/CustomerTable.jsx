import DataTable from "../ui/DataTable";
import Button from "../ui/Button";

function CustomerTable({
  customers,
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
      header: "Address",
      render: (row) => row.address || "-",
    },
    {
      header: "Actions",
      render: (row) => (
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() => onEdit(row)}
          >
            Edit
          </Button>

          <Button
            variant="danger"
            onClick={() => onDelete(row.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={customers}
    />
  );
}

export default CustomerTable;