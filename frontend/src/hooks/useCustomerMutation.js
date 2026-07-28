import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../services/customerService";

export default function useCustomerMutation() {
  const queryClient = useQueryClient();

  // Create Customer
  const createMutation = useMutation({
    mutationFn: createCustomer,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });

      toast.success("👤 Customer added successfully!");
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Failed to add customer."
      );
    },
  });

  // Update Customer
  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateCustomer(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });

      toast.success("✏️ Customer updated successfully!");
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Failed to update customer."
      );
    },
  });

  // Delete Customer
  const deleteMutation = useMutation({
    mutationFn: deleteCustomer,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });

      toast.success("🗑️ Customer deleted successfully!");
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Failed to delete customer."
      );
    },
  });

  return {
    createMutation,
    updateMutation,
    deleteMutation,
  };
}