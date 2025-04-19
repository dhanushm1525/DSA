let array = [1, 4, 5, 67, 4, 3, 5, 68, 7, 6, 4546, 57, 897]

function sort (arr){
    for (let i = 0 ;i<arr.length-1;i++){
        let min = i 

        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }

        [arr[i],arr[min]] = [arr[min],arr[i]]
    }

    console.log(arr);
    
}





function selecion(arr){
    for(let i = 0;i<arr.length-1;i++){
        let min = i

        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }

        [arr[i],arr[min]] = [arr[min],arr[i]]
    }

  console.log(arr);
  
    
}

selecion(array)




function njn(srr){
    for(let i = 0 ;i<srr.length-1;i++){
        let min  = i

        for(let j = i+1;j<srr.length;j++){
            if(srr[j]<srr[min]){
                min = j
            }
        }

        [srr[i],srr[min]]= [srr[min],srr[i]]
    }

    console.log(srr);
    
}

njn(array)