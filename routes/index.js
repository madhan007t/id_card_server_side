const { UploadImage } = require("../controllers/shared.helper");
const { upload } = require("../helper/multer.helper");
const { user_routes, single_routes } = require("./routes_import");

const router = require("express").Router();

router.use("/user", user_routes);
router.use("/single", single_routes);

router.post("/upload_images", upload.single("image"), UploadImage);

module.exports = router;
