const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PlaintoHash = async (plain_text, hash_text) => {
  return await bcrypt.compare(plain_text, hash_text);
};

const encrptPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

const GenerateToken = async (payload) => {
  try {
    return await jwt.sign(payload, process.env.SECRET_KEY);
  } catch (e) {
    throw e;
  }
};

module.exports = {
  PlaintoHash,
  encrptPassword,
  GenerateToken,
};
