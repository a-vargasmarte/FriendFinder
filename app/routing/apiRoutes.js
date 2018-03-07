// Dependencies
// ===========================================================
const express = require("express");
const friends = require("../data/friends");
const app = express();

// console.log(friends.friends);
// Routes
// ===========================================================
app.get("/api/friends", function (req, res) {
    res.json(friends.friends);
});
app.post("/api/friends", function (req, res) {
    // we store req.body in a variable newFriend
    const newFriend = req.body;

    // console.log(newFriend);

    // we then add this newfriend to our friends array
    friends.friends.push(newFriend);
});