import api from "./api";

export const createPurchase = async (purchaseData) => {
  const res = await api.post("/purchases", purchaseData);
  return res.data;
};