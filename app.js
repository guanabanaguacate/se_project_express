const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index");
// const { NOT_FOUND } = require("./utils/errors");

const app = express();
const { PORT = 3001 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db").catch(() => {});
app.use(cors());
app.use(express.json());

app.use("/", mainRouter);

// app.use((req, res) => {
//   res.status(NOT_FOUND).send({ message: "Requested resource not found" });
// });

app.listen(PORT, () => {});
