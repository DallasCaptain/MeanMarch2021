const express = require('express')



var app = express()
app.use(express.static(__dirname + "/static"));
app.set('views',__dirname + '/views')
app.set('view engine', 'ejs')

//routing
app.get('/',(req,res)=>{
//can do nothing if we want to 
//send index.html from static folder
})

app.get('/home',(req,res)=>{
    let something = 'something else'
    let users = [{name:'bob'},{name:'carl'}]
    res.render('users', {users:users,something:something})
})



app.listen(8000,function(){
    console.log('listening on port 8000')
})
