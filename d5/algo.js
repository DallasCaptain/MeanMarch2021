
// function something(str1, str2){
//         let count1 = 0
//         let count2 = 0
//         for(let str of [str1,str2]){
//             let count = 0
//             for(let i = 0; i<str.length;i++){
//                 let unique = true
//                 for(let y = i+1; y< str.length;y++){
//                     if(str[y] == str[i]){
//                         unique = false
//                     }
//                 }
//                 if(unique){
//                     count++ 
//                 }
//             }
//             if(count1){
//                 count2 = count
//             }else{
//                 count1 = count
//             }
//         }
//     return(count1 == count2)
// }

// function something(str1,str2){
//     //map
//     vals1 ={}
//     //str2 spent values
//     vals2 = {}
//     str2i = 0
//     for(let i = 0; i < str1.length; i++){
//         if(vals1[str1[i]]){
//             continue
//         }else{
//             while(vals2[str2[str2i]]){
//                 str2i++
//             }
//             if(!str2[str2i]){
//                 return false
//             }
//             vals1[str1[i]] = str2[str2i]
//             vals2[str2[str2i]] = true
//             str2i++
//         }
//     }
//     while(str2i < str2.length){
//         if(!vals2[str2[str2i]]){
//             return(false)
//         }
//         str2i++
//     }
//     // console.log(str2i)
//     return (true)


// }

// function isomorphicsomething(str1,str2){
//     //isometric requires same length str1 and str2
//     if(str1.length != str2.length){
//         return false
//     }
//     //map
//     vals1 = {}
//     //used str2
//     vals2 = {}

//     for(let i = 0; i < str1.length; i++){
//         //have we maped current str1 char
//         if(!vals1[str1[i]]){
//             //unmapped str1 char
//             //have we used current str2 char
//             if(vals2[str2[i]]){
//                 return false
//             }
//             //record map and record str2 char usage
//             vals1[str1[i]] = str2[i]
//             vals2[str2[i]]=true
//         }else{
//             //already mapped str1 char
//             //does it line up with str2 char same as previous mapping
//             if(vals1[str1[i]] != str2[i]){
//                 return false
//             }
//         }
//     }
    
//     return (true)


// }

// console.log(isomorphicsomething('asff','asdf'))

