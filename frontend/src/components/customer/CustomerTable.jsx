import DataTable from "../ui/DataTable";
import Button from "../ui/Button";

import api from "../../services/api";
import { exportToExcel } from "../../utils/exportToExcel";
import toast from "react-hot-toast";

function CustomerTable({
  customers,
  onEdit,
  onDelete,
}) {
const handleExport = async (customer) => {
  try {
    const res = await api.get(`/customers/${customer.id}/export`);

    const formattedData = res.data.map((item) => ({
      Customer: item.customerName,
      Mobile: item.mobile,
      "Bill No": item.billNo,
      "Purchase Date": new Date(item.purchaseDate).toLocaleDateString(
        "en-IN"
      ),
      Products: item.products,
      Amount: item.amount,
    }));

    exportToExcel(
      formattedData,
      `${customer.name}_Purchase_History`
    );

    toast.success("Customer history exported successfully");
  } catch (err) {
    console.error(err);
    toast.error("Export failed");
  }
};

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

          <Button
  onClick={() => handleExport(row)}
>
  Export Excel
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