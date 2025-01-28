const { verfiycationToken } = require("../helper/shared.helper");
const { userLogin, userSingup, checklogin } = require("./controller_imports.routes");

const router = require("express").Router();

router.post("/user_login", userLogin);
router.post("/user_signup", userSingup);
router.get("/check_login", verfiycationToken, checklogin);

module.exports = router;
