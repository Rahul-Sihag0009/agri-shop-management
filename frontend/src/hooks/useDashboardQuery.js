import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export default function useDashboardQuery() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const res = await api.get("/dashboard");
      return res.data;
    },
  });
}