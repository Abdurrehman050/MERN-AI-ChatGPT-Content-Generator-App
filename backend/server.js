const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const usersRouter = require("./routes/usersRouter");
const { errorHandler } = require("./middlewares/errorMiddleware");
require("./utils/connectDB")();

const app = express();
const PORT = process.env.PORT || 8090;
//-------middleware-----
app.use(express.json()); // pass incoming json or payload
app.use(cookieParser()); // pass the cookie automatically

//----Routes-----
app.use("/api/v1/users", usersRouter);

//-----Error handler middleware
app.use(errorHandler);

//! Start server
app.listen(PORT, console.log(`server is running on ${PORT}`));
