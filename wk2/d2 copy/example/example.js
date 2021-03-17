console.log('in example')
const something = 'bob'
const somethingelse = 'carl'

module.exports = {
    something:something,
    index:(req,res)=>{
        console.log('rendering index')
    },
    new:(req,res)=>{
        
    }
}