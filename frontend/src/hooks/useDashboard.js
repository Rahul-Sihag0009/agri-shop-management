import { useEffect, useState } from "react";
import api from "../services/api";

export default function useDashboard() {

  const [stats, setStats] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {

      const res = await api.get("/dashboard");

      setStats(res.data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchDashboard();

  }, []);

  return {
    stats,
    loading,
    refresh: fetchDashboard,
  };
}