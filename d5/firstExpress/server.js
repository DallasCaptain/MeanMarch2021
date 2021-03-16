const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')


var app = express()
app.use(session({secret: 'i solemnly swear i am upto no good'}))
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}))
app.set('views',__dirname + '/views')
app.set('view engine', 'ejs')

//routing
app.get('/',(req,res)=>{
//can do nothing if we want to 
//send index.html from static folder
})

app.get('/home',(req,res)=>{
    let something = req.session.email
    let users = [{name:'bob'},{name:'carl'}]
    res.render('users', {users:users,something:something})
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/static/home.html')
})

app.post('/login',(req,res)=>{
    //console.log(req.body)
    req.session.email = req.body.email
    console.log(req.session)
    res.redirect('/home')
})

app.get('/logout',(req,res)=>{
    // req.session.destroy(()=>{
    //     res.redirect('/home')
    // })
    req.session.email =''
    res.redirect('/home')
})



app.listen(8000,function(){
    console.log('listening on port 8000')
})
