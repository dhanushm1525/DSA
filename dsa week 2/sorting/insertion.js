function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let nit = arr[i]

        let j = i - 1
        while (j >= 0 && arr[j] > nit) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = nit
    }
}
let array = [1, 4, 2, 7, 4, 9, 4, 7, 4]
console.log(sort(array));




// function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let nit = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > nit) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j + 1] = nit
//     }
// }

// function vvv(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let nti = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > nti) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }

//         arr[j + 1] = nti
//     }
// }


// function srt(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let numbertoinsert = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > numbertoinsert) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j + 1] = numbertoinsert

//     }
    
// }

// function namless(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let nnn = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > nnn) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j + 1] = nnn
//     }
// }



// function flds(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let bbb = arr[i]
//         let j = i - 1
//         while (j >= 0 && arr[j] > bbb) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j + 1] = bbb
//     }
// }




// function insert(arr){
//     for(let i = 0;i<arr.length;i++){
//         let numberTObeInserted = arr[i]

//         let j =i-1
//         while(j>=0&&arr[j]>numberTObeInserted){
//             arr[j+1] = arr[j]
//             j=j-1
//         }
//         arr[j+1]=numberTObeInserted
//     }
// }



// function insertion(arr){
//     for(let i = 0;i<arr.length;i++){
//         let num  =arr[i]

//         let j=i-1

//         while(j<=0&&arr[j]>num){
//             arr[j+1] = arr[j]
//             j=j-1
//         }

//         arr[j+1] = num
//     }

// }




function insertion(arr){
    for(let i = 1;i<arr.length-1;i++){
        let nTi = arr[i]

        let j=i-1

        while(j<=0&&arr[j]>nTi){
            arr[j+1] = arr[j]
            j = j-1
        }

        arr[j]= nTi
    }

    console.log(arr);
    
}




insertion(array)