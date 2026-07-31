const userService = require("../services/userService");

const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({
      message: "User deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

const changePassword = async (req, res, next) => {

  try {

    await userService.changePassword(
      req.params.id,
      req.body.password
    );

    res.json({
      success: true,
      message: "Password changed successfully",
    });

  } catch (err) {

    next(err);

  }

};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  changePassword,
};
