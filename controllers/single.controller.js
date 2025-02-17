const { result } = require("lodash");
const { successResponse, errorResponse } = require("../helper/response.helper");
const { SingleSchema } = require("./models_import");

const addSinglid = async (req, res) => {
  try {
    const result = await SingleSchema.create(req.body);
    successResponse(res, "add successfully", result);
  } catch (err) {
    console.log(err);
    errorResponse(err);
  }
};

const getsingleid = async (req, res) => {
  try {
    let where = {};
    const result = await SingleSchema.aggregate([
      {
        $match: where,
      },
    ]);
    successResponse(res, "get Success", result);
  } catch (err) {
    console.log(err);

    errorResponse(err);
  }
};

const deleteid = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SingleSchema.findByIdAndDelete(id);
    successResponse(res, "Deleted Successfully", "");
  } catch (err) {
    errorResponse(err);
  }
};

module.exports = { addSinglid, getsingleid, deleteid };
