const mongoose = require("mongoose");
const dotenv = require("dotenv"); // for scequre API/Database if upload at github.
dotenv.config({ path: "./config.env" })
//connection
const db = process.env.DATABASE; // connection is placed inside of config.env and this file name will be written in gitignore file so that no one can see it.
mongoose.connect(db).then(() => { console.log("Connected Successfully") }).catch((err) => { console.log("Connection Failed") });