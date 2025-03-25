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
