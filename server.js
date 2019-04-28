// Dependencies
var express = require("express");
var path = require("path");

// Setting up express
var app = express();
var PORT = process.env.PORT || 8060;

// Express data parsing
app.use(express.static('app/public'));
app.use(express.urlencoded({
 extended: true
}));
app.use(express.json());

// Router

const htmlRouter = require('./app/routing/htmlRoutes.js');
const apiRouter = require('./app/routing/apiRoutes.js');

app.use(htmlRouter);
app.use(apiRouter);


// Listener
app.listen(PORT, function () {
 console.log("App listening on PORT: " + PORT);
});