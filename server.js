const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});