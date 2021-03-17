const mongoose = require('mongoose')


const TshirtScheme = new mongoose.Schema({
    color:String,
    logo:String
})

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String,
    tshirts: [TshirtScheme],
})

const User = mongoose.model('User', UserSchema)
const Tshirt = mongoose.model('Tshirt', TshirtScheme)

module.exports = {
    TshirtScheme:TshirtScheme,
    UserSchema:UserSchema,
    User:User,
    Tshirt:Tshirt
}