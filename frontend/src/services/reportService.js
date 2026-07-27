import api from "./api";

export const getSalesReport = async (
    startDate,
    endDate
) => {

    const res =
    await api.get(
        `/reports/sales?startDate=${startDate}&endDate=${endDate}`
    );

    return res.data;

};