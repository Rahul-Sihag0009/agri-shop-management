import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import api from "../../services/api";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function ChangePasswordModal({ user, onClose, onSuccess }) {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {

    try {

      await api.put(
        `/users/${user.id}/password`,
        {
          password: data.password,
        }
      );

      toast.success("Password changed successfully");

      reset();

      onSuccess();

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Unable to change password"
      );

    }

  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <p className="mb-4">
        Change password for
        <strong> {user.name}</strong>
      </p>

      <Input
        label="New Password"
        type="password"
        {...register("password", {
          required: true,
          minLength: 6,
        })}
      />

      <div className="flex justify-end gap-3 mt-6">

        <Button
          variant="secondary"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Saving..."
            : "Update Password"}
        </Button>

      </div>

    </form>

  );

}

export default ChangePasswordModal;