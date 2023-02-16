const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./user/routes");
const branchRouter = require("./branch/routes");

const app = express();

mongoose
  .connect(
    "mongodb+srv://washoo-admin:Z0JuSCyBRB1yHI7u@cluster0.uj6t33a.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log("connection failed! ");
  });
mongoose.set("strictQuery", false);

//use body-parser to pass the json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//allow to access the backend images to frontend

//giving allow the headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,PUT,DELETE,OPTIONS"
  );
  next();
});

app.use("/api/user", userRoutes);
app.use("/api/branch", branchRouter);

module.exports = app;
