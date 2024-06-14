const express = require("express");
const usersRouter = require("./routes/usersRouter");

const app = express();
const PORT = process.env.PORT || 8090;

//----Routes-----
app.use("/api/v1/users", usersRouter);

//! Start server
app.listen(PORT, console.log(`server is running on ${PORT}`));
