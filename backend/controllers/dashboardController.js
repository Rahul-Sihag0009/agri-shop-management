const dashboardService = require("../services/dashboardService");

const getDashboardStats = async(req,res,next)=>{

    try{

        const stats=
            await dashboardService.getDashboardStats();

        res.json(stats);

    }

    catch(err){

        next(err);

    }

};

const getRecentSales=async(req,res,next)=>{

    try{

        const sales=
            await dashboardService.getRecentSales();

        res.json(sales);

    }

    catch(err){

        next(err);

    }

};

const getLowStockProducts=async(req,res,next)=>{

    try{

        const products=
            await dashboardService.getLowStockProducts();

        res.json(products);

    }

    catch(err){

        next(err);

    }

};

const getTopSellingProducts = async (req, res, next) => {

  try {

    const products =
      await dashboardService.getTopSellingProducts();

    res.json(products);

  } catch (err) {

    next(err);

  }

};

const getMonthlySales = async (req, res, next) => {
  try {
    const data = await dashboardService.getMonthlySales();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports={
    getDashboardStats,
    getRecentSales,
    getLowStockProducts,
    getTopSellingProducts,
    getMonthlySales
};