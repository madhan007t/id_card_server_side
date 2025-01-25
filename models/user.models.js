const { model, Schema } = require("mongoose");

module.exports = model(
  "user",
  Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone_no: {
        type: Number,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    {
      collection: "user",
      timestamps: true,
    }
  )
);
