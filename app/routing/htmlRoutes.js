// Dependencies
// ===========================================================
const express = require("express");

const app = express();

// Routes
// ===========================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});