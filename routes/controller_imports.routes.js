const { addSinglid, getsingleid } = require("../controllers/single.controller");
const { userLogin, userSingup, checklogin } = require("../controllers/user.controller");

module.exports = {
  userLogin,
  userSingup,
  checklogin,

  // single
  addSinglid,
  getsingleid,
};
