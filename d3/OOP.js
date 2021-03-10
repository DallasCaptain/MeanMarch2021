// function UserFactory(){
//     return {name:'bob'}
// }
// let bob = UserFactory()

//functional objects ES5
// function User(name){
//     this.name = name
// }

// let bob = new User()

//class objects ES6
//inheritance
class User{
    constructor(name){
        this.name = name
        this._permissions = 'normy'
    }
    get permissions(){
        return this._permissions
    }
    set permissions(perm){
        if(Object.getPrototypeOf(this) == Admin.prototype){
            this._permissions = perm
        }else{
            console.log(this.name,'is not an admin')
        }
    }
    speak(){
        console.log('hello my name is ',this.name)
    }
}
class Admin extends User{
    constructor(name){
        super(name)
        this._permissions = 'admin'
    }

    
    speak (){
        super.speak()
        console.log('whats broken?')
    }
}


let bob = new User('bob')
let carl = new Admin('carl')
bob.speak()
carl.speak()
if(carl.permissions == 'admin'){
    console.log('carl is an admin')
}
bob.permissions = 'admin'
carl.permissions = 'SUPER admin'
console.log(bob,carl)

