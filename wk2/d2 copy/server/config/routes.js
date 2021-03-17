const Users = require('../controllers/users')

module.exports = (app)=>{
    app.get('/',(req,res)=>{
        Users.home(req,res)
    })

    

}