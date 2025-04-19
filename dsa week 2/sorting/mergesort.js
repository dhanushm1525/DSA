function sort(arr){
    if(arr.length<2){
        return arr
    }

    const mid = Math.floor(arr.length/2)

    const left  =arr.slice(0,mid)
    const right = arr.slice(mid)

    return merge(sort(left),sort(right))


}

function merge(left,right){
    const sortedArraay = []

    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArraay.push(left.shift())
        }else{
            sortedArraay.push(right.shift())
        }
    }
    return [...sortedArraay,...left,...right]
}

console.log(sort([43,5,4,3,5,5,4,3,3,4,5,3,3,5,6,6,6,77,65,4,3]));



function sort(arr){
    if(arr.length<0){
        return arr
    }

    let min = Math.floor(arr.length/2)

    let left=arr.slice(0,min)
    let right = arr.slice(mid)

    return merge(sort(left),sort(right))


}


function merge(left , right){
    const sorted = []

    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }

    return [...sorted,...left,...right]
}


function srrt(arr){
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor(arr.length/2)

    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return merge(sort(left),sort(right))



}


function merge(arr){
    const sorted = []

    while(left.length&&rigth.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }

    return [...sorted,...left,...right]
}