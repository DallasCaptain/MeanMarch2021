const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

mongoose.connect('mongodb://localhost/newestDb', {useNewUrlParser: true});

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

var app = express()
app.use(session({
    secret: 'i solemnly swear i am upto no good',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}))
app.set('views',__dirname + '/views')
app.set('view engine', 'ejs')

//routing
require('./server/config/routes')(app)

app.get('/users',(req,res)=>{
    User.find({})
    .then(users => {
        console.log(users)
    })
    .catch(err => {console.log(err)})
    res.redirect('/')
})


app.get('/setup',(req,res)=>{
    for(let i = 0; i< 2; i++){
        const shirt= new Tshirt()
        shirt.color = 'red'
        shirt.logo = 'Avengers'
        shirt.save()
        .then(newshirt => {
            User.findOne({})
            .then(user =>{
                user.tshirts.push(newshirt)
                user.save()
                .then(updateduser =>{
                    console.log(updateduser)
                })
                .catch(err => {console.log(err)})
            })
            .catch(err => {console.log(err)})
            console.log('saved', newshirt)
        })
        .catch(err => {console.log(err)})
    }

    res.redirect('/')
})

app.get('/fix',(req,res)=>{
    User.findOne({})
    .then(user =>{
        user.email="bob@bob.com"
        bcrypt.hash('asdfasdf',10)
        .then(hash =>{
            user.password = hash
            user.save()
            .then(updateduser =>{
                console.log(updateduser)
            })
            .catch(err => {console.log(err)})
        })
        .catch(err => {console.log(err)})
    })
    .catch(err => {console.log(err)})
    res.redirect('/')
})
//post
app.get('/login',(req,res)=>{
    //req.params.email
    User.findOne({email:'bob@bob.com'})
    .then(user =>{
        //req.params.password
        bcrypt.compare('asdfbsdf',user.password)
        .then(result => {
            if(result){
                //log in
                req.session['user_id'] = user._id
            }else{
                //bad login
            }
            console.log('authenticated?',result)
        })
        .catch(err => {console.log(err)})
    })
    .catch(err => {console.log(err)})
    res.redirect('/')
})


app.listen(8000,function(){
    console.log('listening on port 8000')
})
