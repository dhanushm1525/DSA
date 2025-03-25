let array = [1,4,5,67,4,3,5,68,7,6,4546,57,897]

// function selction(arr){

//     for(let i = 0;i<arr.length-1;i++){
//         let min = i

//         for(let j = i+1;j<arr.length;j++){

//             if(arr[j]<arr[min]){
//                 min = j
//             }

//         }
        
//         if(min!=i){
//             [arr[i],arr[min] ]= [arr[min],arr[i]]
//         }
//     }
//     return arr
// }


// console.log(selction(array));


// function sort(arr){

//     for(let i= 0;i<arr.length-1;i++){

//         let minIndex = i

//         for(let j = i+1; j<arr.length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j
//             }
//         }

//         if(minIndex!=i){
//             [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//         }
//     }
//     console.log(arr);
    
// }

// sort([12,2,43,45,65,67,78,56,54,34,32,1])




function srt(arr){
    for(let i = 0;i<arr.length-1;i++){
        let min = i

        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }

        if(min!=i){
            [arr[i],arr[min]]=[arr[min],arr[i]]
        }
    }
    console.log(arr);
    
}


srt(array)




