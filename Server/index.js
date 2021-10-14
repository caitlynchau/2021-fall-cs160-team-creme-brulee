const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
//const mongoose = require("mongoose");
const userRouter = require("./routes/user-router.js")

const db = require('./db')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// const PORT = process.env.PORT || 3001;

// const username = "briefcaseDB";
// const password = "iloveiman";
// const cluster = "briefcaseCluster";
// const dbname = "myFirstDatabase";

// mongoose.connect(
//     `mongodb+srv://${username}:${password}@${cluster}.yegax.mongodb.net/${dbname}?retryWrites=true&w=majority`,
//     {
//         useNewUrlParser: true,
//         // useFindAndModify: false,
//         useUnifiedTopology: true
//     }
// );

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//     console.log("Connected successfully");
// });


app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: "Briefcase! Team Creme Brulee" });
});
app.use('/api', userRouter);


app.listen(3001, () => {
    console.log(`Server listening on 3001`);
});