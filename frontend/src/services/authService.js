import api from "./api";

// Login
export const login = async (data) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

// Register
export const register = async (data) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};