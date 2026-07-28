import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export default function useSettings() {
  return useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const res = await api.get("/settings");
      return res.data;
    },
  });
}