module.exports = (req, res, next) => {

  if (req.user.role !== "ADMIN") {

    return res.status(403).json({
      success: false,
      message: "Only Admin can perform this action.",
    });

  }

  next();

};