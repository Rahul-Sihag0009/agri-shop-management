import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPurchase } from "../services/purchaseService";

export default function useCreatePurchase() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPurchase,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      queryClient.invalidateQueries({ queryKey: ["inventory"] });
    },
  });
}