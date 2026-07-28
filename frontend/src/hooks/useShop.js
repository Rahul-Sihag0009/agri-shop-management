import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export default function useShop() {
  return useQuery({
    queryKey: ["shop"],
    queryFn: async () => {
      const res = await api.get("/shop");
      return res.data;
    },
  });
}