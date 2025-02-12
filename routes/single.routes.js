const { addSinglid, getsingleid } = require("./controller_imports.routes");

const router = require("express").Router();

router.post("/add_single", addSinglid);
router.get("/get_all", getsingleid);

module.exports = router;
