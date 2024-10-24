const express = require("express");
const ErrorHanler = require("./Middlewares/Error");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "Config/.env",
  });
}

//routes import
const user = require("./Controllers/user");

app.use("/api/v2", user);

//for error handling
app.use(ErrorHanler);

module.exports = app;
