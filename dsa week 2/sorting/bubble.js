// function bubble(arr){

//     let swapped
//     do{
//         swapped = false
//         for(let i = 0;i<arr.length-1;i++){
//             if(arr[i+1]<arr[i]){
//                 let temp = arr[i]
//                 arr[i] =arr[i+1]
//                 arr[i+1] = temp
//                 swapped =true
//             }
//         }
//     }while(swapped)


// }

let array=[-2,3,5,-3,-6,4,8,43,9]
bubble(array)
console.log(array);



function bubble(arr){
    let swapped
    do{
        swapped = false
        for(let i =0;i<arr.length-1;i++){
            if(arr[i+1]<arr[i]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
}


bubble(array)
console.log(array);
