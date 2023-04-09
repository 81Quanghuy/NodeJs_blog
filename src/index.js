const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const { create } = require("express-handlebars");
const app = express();
const port = 3000;
const hbs = create({
  extname: ".hbs",
});
// HTTP logger
app.use(morgan("dev"));
// Template engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));
// Routes init

app.get("/", (req, res) => res.render("home"));
app.get("/news", (req, res) => res.render("news"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
