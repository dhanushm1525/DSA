
function oddoreven(arr,index=0,sum=0){
    if(index>=arr.length) return {sum,arr}

    if(arr[index]%2===0){
        arr[index]=0
    }else{
        sum+=arr[index]
    }

    return oddoreven(arr,index+1,sum)
}

let array = [1,2,3,4,5,6,7,8,9]
console.log(oddoreven(array));


// function count(str,index=0,countt=0){
//     if(index>=str.length) return countt

//      let check = 'aeiouAEIOU'
//      if(check.includes(str[index])){
//         countt++
//      }
//      return count(str,index+1,countt 
        
//      )
// }

// let string = 'brototype'

// console.log(count(string))