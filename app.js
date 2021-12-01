const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
require("./db/connection");
const cookieparser = require("cookie-parser"); // without this cookie will not come from front end
app.use(cookieparser());
app.use(cors());
app.use(bodyParser.json({
    limit: '1mb'
}));

app.use(bodyParser.urlencoded({
    limit: '1mb',
    parameterLimit: 100000,
    extended: true
}));

//Lint the router files
app.use(require("./router/auth"));


if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get(("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    }))
}

app.listen(port, () => {
    console.log(`connection is setup at ${port}`)
})

