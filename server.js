// express initialization ==================================
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));  // folder for all static content
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars initialization ===============================
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");    // SALLY -- not sure what this is doing

// routes initialization ===================================
const routes = require("./controllers/burgerController.js");  // import routes
app.use(routes);

app.listen(PORT, () => {
  console.log('App now listening at localhost: ' + PORT);
});