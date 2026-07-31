import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import api from "../../services/api";
import Button from "../ui/Button";
import Input from "../ui/Input";

function UserForm({ onSuccess }) {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {

    try {

      await api.post("/users", data);

      toast.success("Staff created successfully");

      reset();

      onSuccess();

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Something went wrong"
      );

    }

  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="grid gap-4">

        <Input
          label="Name"
          {...register("name", { required: true })}
        />

        <Input
          label="Email"
          type="email"
          {...register("email", { required: true })}
        />

        <Input
          label="Password"
          type="password"
          {...register("password", { required: true })}
        />

        <select
          {...register("role")}
          className="border rounded-lg p-3"
        >
          <option value="STAFF">STAFF</option>
          <option value="ADMIN">ADMIN</option>
        </select>

      </div>

      <div className="mt-6 flex justify-end">

        <Button type="submit">

          {isSubmitting ? "Saving..." : "Create Staff"}

        </Button>

      </div>

    </form>

  );

}

export default UserForm;