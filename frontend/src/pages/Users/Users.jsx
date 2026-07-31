import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Loading from "../../components/ui/Loading";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import PageHeader from "../../components/ui/PageHeader";

import { FaPlus } from "react-icons/fa";

import UserTable from "../../components/users/UserTable";
import UserForm from "../../components/users/UserForm";

import useUsers from "../../hooks/useUsers";
import api from "../../services/api";

import ChangePasswordModal from "../../components/users/ChangePasswordModal";

function Users() {

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useUsers();

  const [open, setOpen] = useState(false);

  const [passwordOpen, setPasswordOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  if (isLoading) return <Loading />;

  const deleteUser = async (id) => {

    if (!window.confirm("Delete this user?")) return;

    try {

      await api.delete(`/users/${id}`);

      refetch();

    } catch (err) {

      alert(err.response?.data?.message || "Unable to delete");

    }

  };

  return (

    <Layout>

      <PageHeader
        title="User Management"
        subtitle="Manage Staff Accounts"
        action={
          <Button onClick={() => setOpen(true)}>
            <FaPlus className="inline mr-2"/>
            Add Staff
          </Button>
        }
      />

      <Card>

          <UserTable
            users={users}
            onDelete={deleteUser}
            onChangePassword={(user) => {
            setSelectedUser(user);
            setPasswordOpen(true);
            }}
          />

      </Card>

      <Modal
        open={open}
        title="Add Staff"
        onClose={() => setOpen(false)}
      >

        <UserForm
          onSuccess={()=>{
            setOpen(false);
            refetch();
          }}
        />

      </Modal>

      <Modal
  open={passwordOpen}
  title="Change Password"
  onClose={() => setPasswordOpen(false)}
>

  {selectedUser && (

    <ChangePasswordModal
      user={selectedUser}
      onClose={() => setPasswordOpen(false)}
      onSuccess={() => {

        setPasswordOpen(false);

        refetch();

      }}
    />

  )}

</Modal>

    </Layout>

  );

}

export default Users;