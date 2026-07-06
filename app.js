require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errors } = require("celebrate");

const mainRouter = require("./routes/index");
const errorHandler = require("./middlewares/error-handler");
const {
  requestLogger,
  errorLogger,
} = require("./middlewares/logger");

const app = express();
const { PORT = 3001 } = process.env;

// DB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ===== MIDDLEWARE ORDER (IMPORTANT) =====

// request logger FIRST (logs every request)
app.use(requestLogger);

app.use(cors());
app.use(express.json());

// CRASH TEST ROUTE (must be BEFORE other routes)
app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

// routes
app.use("/", mainRouter);

// error logger (logs failed requests/errors)
app.use(errorLogger);

// celebrate validation errors
app.use(errors());

// centralized error handler (LAST)
app.use(errorHandler);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});