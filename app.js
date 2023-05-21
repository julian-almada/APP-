const express = require("express");
const ejs = require("ejs");
const app = express();
const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", mainRoutes);

app.listen("3000");
console.log("server runnig on port 3000");
