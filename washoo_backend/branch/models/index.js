const mongoose = require("mongoose");

const branchSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  postalCode: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  services: [
    {
      name: { type: String },
      price: { type: Number },
    },
  ],
});

module.exports = mongoose.model("Branch", branchSchema);
