// require relevant packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// create a port to listen to
const port = process.env.PORT || 3000;


// set up express app
const app = express();

// sets up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// start our server so it can begin listening to client
app.listen(port, () => console.log(`listening on port ${port}`));

// we require our routing scripts
const html = require("./app/routing/htmlRoutes.js")(app);
const api = require("./app/routing/apiRoutes.js")(app);

// const friends = require("./app/data/friends");