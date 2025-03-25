

// function bin(arr,t){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1;
//     while (leftIndex<=rightIndex){
//         middleIndex = Math.floor((leftIndex+rightIndex)/2)

//         if(t===arr[middleIndex]){
//             return middleIndex
//         }
//         if(t<arr[middleIndex]){
//             rightIndex = middleIndex-1
//         }else{
//             leftIndex = middleIndex+1
//         }
//     }
//     return -1
// };

// console.log(bin(ar,10));

//recursive binary
let ar = [-5,2,4,6,10]
function recurBin(arr,t){
    return search(arr,t,0,arr.length-1)
}

function search(arr,t,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }
    let middleIndex = Math.floor((rightIndex+leftIndex)/2)
    if(t===arr[middleIndex]){
        return middleIndex
    }

    if(t<arr[middleIndex]){
        return search(arr,t,leftIndex,middleIndex-1)
    }else{
        return search(arr,t,middleIndex+1,rightIndex)
    }
}

console.log(recurBin(ar,10))



function search(arr,t,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if(t===arr[middleIndex]){
        return middleIndex
    }

    if(t>arr[middleIndex]){
        return search(arr,t,middleIndex+1,rightIndex)
    }else{
        return search(arr,t,leftIndex,middleIndex-1)
    }
}


function bbb(arr,t){
    return serch(arr,t,0,arr.length-1)
}

function serch(arr,t,left,right){
    if(left>right) return -1

    let middle = Math.floor((left+right)/2)

    if(t===middle){
        return middle

    }

    if(t<middle){
        return serch(arr,t,left,middle-1)
    }else{
        return serch(arr,t,middle+1,right )
    }
}