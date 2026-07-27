const prisma = require("../config/prisma");

const getSalesReport = async (
    startDate,
    endDate
) => {

    return prisma.sale.findMany({

        where:{
            createdAt:{
                gte:new Date(startDate),
                lte:new Date(endDate)
            }
        },

        include:{
            customer:true,
            items:true
        },

        orderBy:{
            createdAt:"desc"
        }

    });

};

module.exports={
    getSalesReport
};