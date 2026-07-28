import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api from "../services/api";

export default function useUpdateShop() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const res = await api.put("/shop", data);
      return res.data;
    },

    onSuccess: () => {
      toast.success("Shop details updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["shop"],
      });
    },

    onError: () => {
      toast.error("Failed to update shop details");
    },
  });
}