import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api from "../services/api";

export default function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      await api.delete(`/users/${id}`);
    },

    onSuccess: () => {
      toast.success("User deleted");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

    onError: () => {
      toast.error("Delete failed");
    },
  });
}