const { model, Schema } = require("mongoose");

module.exports = model(
  "single",
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
      id_number: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      template: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      title: {
        type: String,
      },
    },
    {
      colloction: "single",
      timestamps: true,
    }
  )
);
