const { addSinglid, getsingleid, deleteid } = require("./controller_imports.routes");

const router = require("express").Router();

router.post("/add_single", addSinglid);
router.get("/get_all", getsingleid);
router.delete("/delete_id/:id", deleteid);
module.exports = router;
