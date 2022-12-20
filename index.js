require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const connectDB = require("./DB/connect");
const cors = require("cors");
const router = require("./router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => res.send("hello welcome"));
app.use("/api", router);

const port = process.env.PORT || 5000;
connectDB(process.env.DB_URL).then(() => {
  app.listen(port);
  console.log("server is live and running http://localhost:" + port);
});
