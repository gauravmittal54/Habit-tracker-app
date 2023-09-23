// Modules reuired
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
require("./connection/db_connection");
const habit = require("./model/habitSchema");
const router = require("./routers/routes");
const hbs = require("hbs");
const Handlebars = require('handlebars');
const formatDate = require('./controllers/formatDate');

//constants initialised
const app = express();
const port = process.env.PORT || 8000;
const partials_path = path.join(__dirname, "/templates/partials");

//setting up handlebars and thier helpers
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "templates"));
hbs.registerPartials(partials_path);
hbs.registerHelper('customFunction', function (date) {
  const formattedDate = formatDate(date); 
  return new Handlebars.SafeString(formattedDate); 
});

//Middlewares and routers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(router);

//port listening
app.listen(port, () => {
  console.log(`Server running on - ${port}`);
});
