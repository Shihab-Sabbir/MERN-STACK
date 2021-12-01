const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    work: { type: String, required: true },
    password: { type: String, required: true },
    cpassword: { type: String, required: true },
    tokens: [{ token: { type: String, required: true } }], //token generate at every single signin by same user so first tokens then token
    date: { type: Date, default: Date.now }
}, { collection: "users" })




// password hashing here : 

userSchema.pre('save', async function (next) {   /* this mean password will be hash before save() function; */
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    { this.cpassword = await bcrypt.hash(this.cpassword, 12) }; // password will be convedted in 12 block   

    next(); // this means now you can go to save function.
})


//generating token 

userSchema.methods.generateAuthToken = async function () {
    try {
        let newToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: newToken })
        await this.save();
        return newToken;
    }
    catch (err) { console.log("Token is not generated") }
}

const User = new mongoose.model("users", userSchema); // users is collection name
module.exports = User;