const express = require("express");

const app = express();
const PORT = process.env.PORT || 8090;

//! Start server
app.listen(PORT, console.log(`server is running on ${PORT}`));
