const { ALREADY_EMAIL_USED, LOGIN_SUCCESS, LOGIN_FAILED, INVALID_ACCOUNT_DETAILS, REGITERATION_SUCCESS, REGITERATION_FAILED } = require("../helper/message.helper");
const { successResponse, errorResponse } = require("../helper/response.helper");
const { PlaintoHash, GenerateToken, encrptPassword } = require("../helper/shared.helper");
const { UserSchema } = require("./models_import");
const _ = require("lodash");

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserSchema.aggregate([{ $match: { email } }]);

    if (!user) {
      return errorResponse(res, INVALID_ACCOUNT_DETAILS);
    }
    const isPassword = await PlaintoHash(password, _.get(user, "[0].password", ""));
    if (isPassword) {
      const payload = {
        id: _.get(user, "[0]._id", ""),
        email: _.get(user, "[0].email", ""),
      };
      const token = await GenerateToken(payload);
      return successResponse(res, LOGIN_SUCCESS, {
        ...user[0],
        token,
      });
    } else {
      errorResponse(res, LOGIN_FAILED);
    }
  } catch (err) {
    console.log(err);
    errorResponse(err, LOGIN_FAILED);
  }
};

const userSingup = async (req, res) => {
  try {
    const { name, email, password, phone_no } = req.body;
    console.log(name, email);

    const result = await UserSchema.findOne({ email });
    if (result) {
      return errorResponse(res, ALREADY_EMAIL_USED, result);
    }

    const newUser = new UserSchema({
      name,
      email,
      phone_no,
      password: await encrptPassword(password),
    });
    const user = await newUser.save();
    const payload = {
      id: _.get(user, "_id", ""),
      email: _.get(user, "email", ""),
    };

    const token = await GenerateToken(payload);

    successResponse(res, REGITERATION_SUCCESS, {
      ...user,
      token,
    });
  } catch (err) {
    console.log(err);
    errorResponse(err, REGITERATION_FAILED);
  }
};

module.exports = {
  userLogin,
  userSingup,
};
