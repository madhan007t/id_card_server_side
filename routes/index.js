const { user_routes } = require("./routes_import");

const router = require("express").Router();

router.use("/user", user_routes);

module.exports = router;
