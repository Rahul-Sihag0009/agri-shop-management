import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export default function useRecentSales() {
  return useQuery({
    queryKey: ["recent-sales"],
    queryFn: async () => {
      const res = await api.get("/dashboard/recent-sales");
      return res.data;
    },
  });
}
