// function fact(n) {
//     if (n == 0) {
//         console.log(`factorial of ${n}is ${1}`);
//         return 1;

//     } else {
//         let facto = 1
//         for (i = n; i >= 1; i--) {
//             facto *= i
//         }
//         console.log(facto);
// }
// }

// fact(5)

//recursive fact
function recursiveFact(n){
    if(n===0) return 1
    
    return  n*recursiveFact(n-1)
}

console.log(recursiveFact(5));
