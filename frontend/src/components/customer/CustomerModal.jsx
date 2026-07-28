import Modal from "../ui/Modal";
import CustomerForm from "./CustomerForm";

function CustomerModal({
  open,
  onClose,
  customer,
  onSubmit,
}) {
  if (!open) return null;

  return (
    <Modal
  open={open}
  title={customer ? "Edit Customer" : "Add Customer"}
  onClose={onClose}
>
      <CustomerForm
        initialData={customer}
        onSubmit={onSubmit}
      />
    </Modal>
  );
}

export default CustomerModal;