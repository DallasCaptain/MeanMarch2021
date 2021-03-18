const express = require('express')
const app = express()


app.use(express.static(__dirname+'/public/dist/public'))
app.use(express.json({extended:true}))

app.get('/',(req,res)=>{
    console.log('serving angular')
})

app.get('/api/tasks',(req,res)=>{
    console.log('tasks?')
    res.json([{name:'dishes',completed:false},{name:'sweeping',completed:true},{name:'mopping',completed:false}])
})

app.listen(8000, ()=>{
    console.log('listening on port 8000')
})

//ng build