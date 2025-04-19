function sort(arr){
    if(arr.length<2){
        return arr
    }

    let mid =  Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let rigth  = arr.slice(mid)

    return merge(sort(left),sort(rigth))
}

function merge(left,rigth){
    let sorted = []

    while(left.length&&rigth.length){
        if(left[0]<=rigth[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(rigth.shift())
        }
    }

    return  [...sorted,...left,...rigth]
}


console.log(sort([4,5,2,6,8,2,4,9,1]));
