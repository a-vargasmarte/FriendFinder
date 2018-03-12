// Dependencies
// ===========================================================
const express = require("express");

// const app = express();

// Constructor function for friends
function Friend(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores
}


// Data
// ===========================================================

const friends = [
    new Friend(`'T'Challa`, "https://i.annihil.us/u/prod/marvel//universe3zx/images/4/4d/Bpanther.jpg", [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]),
    new Friend(`Natasha Romanova`, "https://i.annihil.us/u/prod/marvel//universe3zx/images/f/f9/BlackWidow.jpg", [3, 5, 2, 3, 1, 3, 5, 5, 4, 1])
];

// $("#submit").on("click", function (event) {
//     event.preventDefault();
//     let surveyArray = [parseInt($("#q1").val())];
//     console.log(surveyArray);
//     // const newFriend = new Friend($("#name").val().trim(), $("#photo").val().trim(), []);

// });

module.exports = {
    friends: friends,
    add: function (f) {
        friends.push(new Friend(f.name, f.photo, f.scores));
    }
};