import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export default function useMonthlySales() {
  return useQuery({
    queryKey: ["monthly-sales"],
    queryFn: async () => {
      const res = await api.get("/dashboard/monthly-sales");
      return res.data;
    },
  });
}