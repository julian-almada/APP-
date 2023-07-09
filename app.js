const express = require("express");
const ejs = require("ejs");
const app = express();
const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", mainRoutes);
app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen("3030");
console.log("server runnig on port 3030");
