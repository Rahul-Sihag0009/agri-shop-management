import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export default function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await api.get("/users");
      return res.data;
    },
  });
}