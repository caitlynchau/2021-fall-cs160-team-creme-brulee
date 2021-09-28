const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

// const PORT = process.env.PORT || 3001;

const username = "briefcaseDB";
const password = "iloveiman";
const cluster = "briefcaseCluster";
const dbname = "myFirstDatabase";

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.yegax.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});



app.use(express.json());
app.use(Router);



app.get("/api", (req, res) => {
    res.json({ message: "Briefcase! Team Creme Brulee" });
});

app.listen(3001, () => {
    console.log(`Server listening on 3001`);
});