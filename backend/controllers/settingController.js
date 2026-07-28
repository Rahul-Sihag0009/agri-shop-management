const settingService = require("../services/settingService");

const getSettings = async (req, res, next) => {
  try {
    const settings = await settingService.getSettings();
    res.json(settings);
  } catch (err) {
    next(err);
  }
};

const updateSettings = async (req, res, next) => {
  try {
    const settings = await settingService.updateSettings(req.body);
    res.json(settings);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getSettings,
  updateSettings,
};