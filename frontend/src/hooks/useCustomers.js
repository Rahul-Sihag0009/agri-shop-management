import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../services/customerService";

export default function useCustomers() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  return {
    customers: data,
    isLoading,
  };
}