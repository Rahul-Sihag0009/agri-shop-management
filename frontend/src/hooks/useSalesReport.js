import { useQuery } from "@tanstack/react-query";
import { getSalesReport } from "../services/reportService";

export default function useSalesReport(
    startDate,
    endDate
){

    return useQuery({

        queryKey:[
            "sales-report",
            startDate,
            endDate
        ],

        enabled:
            !!startDate &&
            !!endDate,

        queryFn:()=>getSalesReport(
            startDate,
            endDate
        )

    });

}