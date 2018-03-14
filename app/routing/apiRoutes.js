// Dependencies
// ===========================================================
const express = require("express");
const friends = require("../data/friends");
const bodyParser = require("body-parser");
const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
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
        res.json(friends.friends);
    });

    app.post("/api/friends", (req, res) => {
        // we store req.body in a variable newFriend
        let newFriend = req.body;

        // display current friends
        console.log("**** CURRENT FRIENDS ****\n");
        console.log(friends.friends);

        // calculate absolute difference between current friends
        // declare a function to get the total sum of an array
        // function getSum(total, num) {
        //     return total + num;
        // }
        // function reducer(item) {
        //     totDiff = diffArr.reduce(getSum);
        //     // absDiffs.push(totDiff);
        //     console.log(totDiff);
        // }
        let absDiffs = [];
        // let diffArr = [];
        // // using existing data
        // friends.friends[0].scores.forEach((score, i) => {
        //     scoreDiff = Math.abs(score - friends.friends[1].scores[i])
        //     diffArr.push(scoreDiff);
        // });

        // using newFriend data
        friends.friends.forEach((friend, i) => {
            let diffArr = [];
            let reducer = (accumulator, currentValue) => accumulator + currentValue;
            let totDiff;
            friend.scores.forEach(score => {
                scoreDiff = Math.abs(score - parseInt(newFriend.scores[i]));
                diffArr.push(scoreDiff);
            });
            totDiff = diffArr.reduce(reducer);
            // push total differences to absDiffs
            absDiffs.push(totDiff);
        });

        // sort absDiffs in ascending order
        // absDiffs.sort((a, b) => a - b);
        console.log(absDiffs);
        function indexOfSmallest(a) {
            let lowest = 0;
            for (var i = 1; i < a.length; i++) {
                if (a[i] < a[lowest]) lowest = i;
            }
            // return lowest;
            console.log(lowest);
            // log the best match!
            console.log(friends.friends[lowest].name + " is your best match!");
        }
        indexOfSmallest(absDiffs);



        console.log("**** NEW FRIEND SUBMISSION ****\n");
        console.log(newFriend);
        // let absDiff = [];
        // newFriend.scores.forEach(newScore => {
        //     parseInt(newScore);
        //     // iterate over our array of friends
        //     friends.friends.forEach((friend, i) => {
        //         friend.scores.forEach((score, index) => {
        //             absDiff.push(Math.abs(newScore[index] - score[index]));
        //         });
        //     })
        // });
        // console.log(newFriend.scores);
        // console.log(absDiff);


        // console.log(req.body);



        // console.log(newFriend);

        // we then add this newfriend to our friends array
        friends.add(newFriend);
        res.send(true);
    });
}