import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export default function useSuppliers() {
  return useQuery({
    queryKey: ["suppliers"],
    queryFn: async () => {
      const res = await api.get("/suppliers");
      return res.data.suppliers;
    },
  });
}