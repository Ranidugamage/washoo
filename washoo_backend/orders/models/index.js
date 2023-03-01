const mongoose = require("mongoose");

const branchSchema = mongoose.Schema({
    orderId:{type :String,required:true},
    userId: { type: String, required: true },
    phone: { type: Number, required: true,maxLength:10 },
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    weight:{type:Number,required:true },
    services: [
    {
        name: { type: String },
        price: { type: Number },
    },
],
});
module.exports = mongoose.model("Order", branchSchema);