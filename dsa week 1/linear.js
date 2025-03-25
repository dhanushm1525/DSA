let arr = [-5,2,10,4,6]


function Lean(ar,t){
    for(i=0;i<=arr.length;i++){
        if(t==ar[i]){
            return i
        }
    }
    return -1
}

console.log(Lean(arr,20));
