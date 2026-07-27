const reportService=require("../services/reportService");

const getSalesReport=async(req,res,next)=>{

    try{

        const{
            startDate,
            endDate
        }=req.query;

        const report=
        await reportService.getSalesReport(
            startDate,
            endDate
        );

        res.json(report);

    }

    catch(err){

        next(err);

    }

};

module.exports={
    getSalesReport
};