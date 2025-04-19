function sort(arr){
    if(arr.length<2){
        return arr
    }

    let pivot  = arr[arr.length-1]
    let left = []
    let right = []

    for(let i = 0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }

    
    }
    return  [...sort(left),pivot,...sort(right)]
}

// 

function srrt(arr){
    if(arr.length<2){
        return arr
    }

    let pivot = arr[arr.length-1]
    let left  = []
    let right = []
     
    for(let i = 0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...sort(left),pivot,...sort(right)]
}

let array = [-6,20,8,-2,6]


console.log(srrt(array));


function qsort(arr){
    if(arr.length<2){
        return arr
    }

    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for(let i = 0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...sort(left),pivot,...sort(right)]
}


console.log(qsort([9,7,3,54,23,54,32,65,12,76,23,45,3,21,90]));

function sort(arr){


    if(arr.length<2){
        return arr
    }
    let pivot = arr.length-1


    let left =[]
    let right=[]
    for(let i = 0;i<arr,length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...sort(left),pivot,...sort(right)]


}