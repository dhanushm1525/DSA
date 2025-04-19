let array = [1, 4, 5, 67, 4, 3, 5, 68, 7, 6, 4546, 57, 897]
//selection sort


function selec(arr){
    for(let i = 0 ;i<arr.length-1;i++){
        let min = i

        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }

        [arr[i],arr[min]]  = [arr[min],arr[i]]
    }

    console.log(arr);
    
}

//bubble

function bubble(arr){
    let swapped 
    do {

        swapped = false
        for(let i = 0;i<arr.length-1;i++){
        if(arr[i+1]<arr[i]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped = true
        }
        
    } 


}while (swapped);
}



//insertion
function insertion(arr){
    for(let i =0;i<arr.length-1;i++){
        let nTi = arr[i]

        let j=i-1
        while(j>=0&&arr[j]>nTi){
            arr[j+1] = arr[j]
            j=j-1
        }
    }
    console.log(arr);
    }

    

//quick


function sort(arr){
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





//merge\

function sort(arr){
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return merge(sort(left),sort(right))
}

function merge(left,rigth){
    const sorted= []
    while(left.length&&rigth.length){
        if(left[0]<=rigth[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(rigth.shift())
        }
    }

    return [...sorted,...left,...rigth]
}






//flatten


function flat(arr){
    let result = []

    for(item of arr){
        if(Array.isArray(item)){
            result.push(...flat(item))
        }

        result.push(item)
    }

   return result
    
}

console.log(flat([1, [2, [3, 4], 5], 6, [7, [8, 9]]])); 