let mongoose = require('mongoose');

// set up default conn with the password
let db = 'mongodb+srv://A:ABCd1234!@quicksplash-db-dmuwu.mongodb.net/test?retryWrites=true';
mongoose.connect(db, {useNewUrlParser: true});
let qpDB = mongoose.connection;

// get Question Model
let Questions = require('./questionModel');

// let lineReader = require('readline').createInterface({
//     input: require('fs').createReadStream("./src/Assets/questions/prompts.txt")
// });
//
// lineReader.on('line', function (line) {
//     console.log(line);
//     // create and add new account to db
//     let newQuestion = new Questions({
//         question: line
//     });
//
//     newQuestion.save(function (err) {
//         if (err) return "You Fucked up!";
//     });
// });

let questions = [];
console.log(questions);

Questions.find(function (err,doc) {
    console.log(doc[0].question);
});


// let question =[];
// lineReader.on('line', function (line) {
//     console.log(line);
//     question.push(line);
// });

// Questions.countDocuments({}, function(err, count){
//     console.log(count);
//     // create and add new account to db
//     let newQuestion = new Questions({
//         question: question[],
//         id: id
//     });
//
//     newQuestion.save(function (err) {
//         if (err) return "You Fucked up!";
//     });
//
// });


// // let id = 0;
// lineReader.on('line', function (line) {
//     console.log(line);
//     // create and add new account to db
//     let newQuestion = new Questions({
//         question: line
//     });
//
//     newQuestion.save(function (err) {
//         if (err) return "You Fucked up!";
//     });
// });
