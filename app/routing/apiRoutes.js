// Dependencies
// ===========================================================
const express = require("express");
const friends = require("../data/friends");
const bodyParser = require("body-parser");
const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// console.log(friends.friends);

// $("#submit").on("click", function (event) {
//     event.preventDefault();
//     let surveyArray = [parseInt($("#q1").val())];
//     console.log(surveyArray);
//     // const newFriend = new Friend($("#name").val().trim(), $("#photo").val().trim(), []);

// });

// Routes
// ===========================================================
module.exports = function (app) {
    app.get("/api/friends", (req, res) => {
        // res.json(friends.friends);
        res.send(friends.friends);
    });

    app.post("/api/friends", (req, res) => {
        // we store req.body in a variable newFriend
        const newFriend = req.body;
        console.log("**** NEW FRIEND SUBMISSION ****");
        // console.log(newFriend.scores);
        console.log(req.body);



        // console.log(newFriend);

        // we then add this newfriend to our friends array
        // friends.add(newFriend);
        res.send(true);
    });
}