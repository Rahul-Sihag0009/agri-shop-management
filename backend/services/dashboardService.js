const prisma = require("../config/prisma");

const getDashboardStats = async () => {

    const totalProducts = await prisma.product.count();

    const lowStock = await prisma.product.count({
        where:{
            quantity:{
                lte:5
            }
        }
    });

    const outOfStock = await prisma.product.count({
        where:{
            quantity:0
        }
    });

    const totalCustomers = await prisma.customer.count();

    const totalSales = await prisma.sale.count();

    const revenue = await prisma.sale.aggregate({
        _sum:{
            grandTotal:true
        }
    });

    return{

        totalProducts,

        lowStock,

        outOfStock,

        totalCustomers,

        totalSales,

        revenue:
            revenue._sum.grandTotal || 0

    };

};

const getRecentSales = async () => {

    return prisma.sale.findMany({

        orderBy:{
            createdAt:"desc"
        },

        take:10,

        include:{
            customer:true
        }

    });

};

const getLowStockProducts=async()=>{

    return prisma.product.findMany({

        where:{
            quantity:{
                lte:5
            }
        },

        orderBy:{
            quantity:"asc"
        }

    });

};

const getTopSellingProducts=async()=>{

    return prisma.saleItem.groupBy({

        by:["productId"],

        _sum:{
            quantity:true
        },

        orderBy:{
            _sum:{
                quantity:"desc"
            }
        },

        take:5

    });

};

module.exports={
    getDashboardStats,
    getRecentSales,
    getLowStockProducts,
    getTopSellingProducts
};