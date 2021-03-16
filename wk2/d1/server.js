const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/newestDb', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const User = mongoose.model('User', UserSchema)


var app = express()
app.use(session({secret: 'i solemnly swear i am upto no good'}))
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}))
app.set('views',__dirname + '/views')
app.set('view engine', 'ejs')

//routing
app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/users',(req,res)=>{
    User.find({})
    .then(users => {
        console.log(users)
    })
    .catch(err => {console.log(err)})
    res.redirect('/')
})

app.get('/setup',(req,res)=>{
    for(let i = 0; i< 5; i++){
        const user = new User()
        user.name = 'Bob'
        user.age = 19 + i
        user.save()
        .then(newuser => {
            console.log('saved', newuser)
        })
        .catch(err => {console.log(err)})
    }

    res.redirect('/')
})




app.listen(8000,function(){
    console.log('listening on port 8000')
})
