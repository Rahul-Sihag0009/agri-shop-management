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

const getTopSellingProducts = async () => {

  const products = await prisma.saleItem.groupBy({

    by: ["productId"],

    _sum: {
      quantity: true,
    },

    orderBy: {
      _sum: {
        quantity: "desc",
      },
    },

    take: 5,
  });

  const result = await Promise.all(

    products.map(async (item) => {

      const product = await prisma.product.findUnique({

        where: {
          id: item.productId,
        },

        select: {
          productName: true,
        },

      });

      return {

        id: item.productId,

        productName: product?.productName || "Unknown",

        quantitySold: item._sum.quantity,

      };

    })

  );

  return result;
};

const getMonthlySales = async () => {

  const sales = await prisma.sale.findMany({
    select: {
      createdAt: true,
      grandTotal: true,
    },
  });

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec",
  ];

  const result = months.map((month) => ({
    month,
    sales: 0,
  }));

  sales.forEach((sale) => {
    const monthIndex = new Date(sale.createdAt).getMonth();

    result[monthIndex].sales += sale.grandTotal;
  });

  return result;
};

module.exports={
    getDashboardStats,
    getRecentSales,
    getLowStockProducts,
    getTopSellingProducts,
    getMonthlySales
};