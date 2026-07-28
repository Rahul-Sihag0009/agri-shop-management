import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export default function useLowStock() {
  return useQuery({
    queryKey: ["low-stock"],
    queryFn: async () => {
      const res = await api.get("/dashboard/low-stock");
      return res.data;
    },
  });
}