const express = require("express");
require("dotenv").config();
const router = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

app.use(cors("dev"));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", router);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.PORT || 6000, () => {
      console.log("Server listion on port " + process.env.PORT);
    });
  })
  .catch((e) => {
    console.log(e, "error");
  });
