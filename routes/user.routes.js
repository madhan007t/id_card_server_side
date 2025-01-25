const { userLogin, userSingup } = require("./controller_imports.routes");

const router = require("express").Router();

router.post("/user_login", userLogin);
router.post("/user_signup", userSingup);

module.exports = router;
