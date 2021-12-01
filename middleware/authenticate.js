const jwt = require("jsonwebtoken");
const User = require("../model/schema");
const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY); // compare system provided token token with cookies stored token
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token }) // now find which user has logged in.
        if (!rootUser) { throw new Error("User Not Found") }


        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser.id;
        next();

    }
    catch (err) {
        res.status(401).send("Unauthorized");
        console.log(err);
    }

}
module.exports = Authenticate;