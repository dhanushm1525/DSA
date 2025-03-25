//factorial

function fact(n){
    if(n===0) return 1

    return n*fact(n-1)
}



//sum of n numbers
function sum(num){
    if(num===0) return 0

    return num+=sum(num-1)
    
}


//fibo
function fibo(n){
    if(n<2) return 1

    return fibo(n-1)+fibo(n-2)
}


// reverse a string
let str ="hello"

function revv(str){
    if(str === '') return ''

    return str[str.length-1]+revv(str.slice(0,-1))
}




//palinmdrome

function pali(str){
    if(str.length<=1) return true

    if(str[0]!==str[str.length-1])  return false

    return pali(str.slice(1,-1))
}





//sum of array elements
let arr = [1,3,4,5,6,7,8]

function summ(arr,index=0){
    if(index>arr.length-1) return 0

    return arr[index]+=summ(arr,index+1)
}

 


//find the summ

function oddoreven(arr,index=0,sum=0){
    if(index>arr.length-1) return {sum,arr}

    if(arr[index]%2===0){
        arr[index] = 0
    }else{
        sum+=arr[index]
    }

    return oddoreven(arr,index+1,sum)


}




//prime

function duplisum(n,index=0,seen= new Set(),counted = new Set()){

    if(index>n.length-1) return 0

    let current =  n[index]
    let sum = 0

    if(seen.has(current) && !counted.has(current)){
        sum=current
        counted.add(current)
    }

    seen.add(current)

    return sum+duplisum(n,index+1,seen,counted) 
    
}


console.log(duplisum([1,1,2,3,3,4,5,5,6]));





