// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
// var name = 'bob'
// var arr = [1,2,'hello']
// var obj = {'key':'value','key2':'value2'}
// function fname(){
//     // console.log(arr[2])
//     // console.log(obj['key2'])
//     // obj.key = 'carl'
//     // console.log(obj.key)
//     if({}){
//         console.log('1 is truthy')
//     }
//     else{
//         console.log('0 is falsy')
//     }
//     return obj['key']
// }
// console.log(fname())
// if(1 === '1'){
//     console.log('but it is')
// }
// [
//     {'name':'bob','friends':[{'name':'nick'}]},
//     {'name':'carl'}
// ]
// x = false
// while(1){
//     if(x)return 
// }

function strToArr(str){
    let arr = []
    let newWord = ''

    for(let i = 0; i<str.length;i++){
        if(str[i] === ' '){
            arr.push(newWord)
            newWord = ''
            continue
        }
        newWord += str[i]
    }
    if(newWord.length){
        arr.push(newWord)
    }
    return arr
}

console.log(strToArr('Life is good'))