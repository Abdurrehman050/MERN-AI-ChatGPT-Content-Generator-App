const express = require("express");
require("dotenv").config();
const usersRouter = require("./routes/usersRouter");
require("./utils/connectDB")();

const app = express();
const PORT = process.env.PORT || 8090;
//-------middleware-----
app.use(express.json()); // pass incoming json or payload

//----Routes-----
app.use("/api/v1/users", usersRouter);

//! Start server
app.listen(PORT, console.log(`server is running on ${PORT}`));
