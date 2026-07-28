import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api from "../services/api";

export default function useUploadLogo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (file) => {
      const formData = new FormData();

      formData.append("logo", file);

      const res = await api.post(
        "/shop/logo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return res.data;
    },

    onSuccess: () => {
      toast.success("Logo uploaded successfully");

      queryClient.invalidateQueries({
        queryKey: ["shop"],
      });
    },

    onError: () => {
      toast.error("Failed to upload logo");
    },
  });
}