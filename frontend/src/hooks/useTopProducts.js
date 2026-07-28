import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export default function useTopProducts() {
  return useQuery({
    queryKey: ["top-products"],
    queryFn: async () => {
      const res = await api.get("/dashboard/top-products");
      return res.data;
    },
  });
}