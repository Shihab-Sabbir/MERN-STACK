const express = require("express");
const bcrypt = require("bcryptjs");
const router = new express.Router();
router.use(express.json());
const User = require("../model/schema");
const authenticate = require("../middleware/authenticate");
const cors = require("cors");
router.use(cors());

var alert = require('alert');


router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword, image } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return (alert("Please Enter All Fields"),(res.status(422).send("Please Enter All Fields")));
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) { return (alert("Email already exist"), res.status(421).send("Email already exist ")) }
        else if (password != cpassword) {
            return (alert("Passwords are not matching"), res.status(400).send({ message: "Passwords are not matching" }))

        }
        else if (!userExist && password === cpassword) {
            const myData = new User(req.body);
            /*password hash here (one kind of soecial encryption) */
            await myData.save();
            res.status(201).send({ statusCode: 201, message: "Registration Successful" });
            alert("Registration Successful");
            res.redirect('https://srs-mern-stack.herokuapp.com/');
        }
    }
    catch (err) {
        console.log("Registration Failed");
    };

})

router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).send("Please Fill All Fields"), alert("Please Fill All Fields");

        }

        else {
            const userLogin = await User.findOne({ email: email });
            if (!userLogin) { return (alert("email or password is incorrect"), res.status(400).send({ message: "email or password is incorrect" })) }
            const passMatching = await bcrypt.compare(password, userLogin.password); // password here is input password at login page and userlogin.password is the password stored in database at the time of regstration.
            let newToken = await userLogin.generateAuthToken(); //toekn has generated at scema file
            //token store in cookie : 
            res.cookie("jwtoken", newToken, {
                expire: new Date(Date.now() + 25892000000), //token will be expired after 30days from the time of last login
                httpOnly: true
            });
            if (!passMatching) { return (alert("email or password is incorrect"), res.status(400).send({ message: "email or password is incorrect" })) }
            else
                res.send({ message: "User Login Successful" });
                res.redirect('https://srs-mern-stack.herokuapp.com/');
        }
    }
    catch (err) {
        console.log("Failed");
    };
}
)



router.get("/about", authenticate, async (req, res) => {
    try {
        res.send(req.rootUser);
        res.redirect('https://srs-mern-stack.herokuapp.com/');
    }
    catch (err) {
        res.status(400).send("unable to get data");
    };

})
router.get("/logout", (req, res) => {
    res.clearCookie("jwtoken");
    res.status(200).send("Logged Out");
})

//api for Update data from database  
// Update Student
router.patch('/update', authenticate, async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.userId, { $set: req.body })
        console.log('Updated successfully !');
        res.status(200).send('Updated successfully!');
        res.redirect('https://srs-mern-stack.herokuapp.com/');
    }
    catch (err) { res.status(422).send("invalid Update"); }
})


module.exports = router;