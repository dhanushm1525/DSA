// //normal mathod
// function fibo(n){
// let res = [0,1]
// for(i=2;i<n;i++){
//     res[i]=res[i-1]+res[i-2]
// }
// console.log(res);

// }

// fibo(6)

//recursive fibo
function recursiveFibo(n){
    if(n<2) return n;

    return recursiveFibo(n-1)+recursiveFibo(n-2)
}

console.log(recursiveFibo(6));
