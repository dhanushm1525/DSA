const reverse = function (s){
    let splitz = s.split(' ')
    let stack = []

    for(i of splitz){
        stack.push(i)
    }

    let final = ''
    while(stack.length){
        let current = stack.pop()

        if(current){
            final+=" "+current
        }
    }
 
   

    return final.trim()
}




function rev(str){
    let splitz = str.split(' ')

    let stack = []

    for(i of str){
        stack.push(i)
    }

    let finl = ''
    while(stack.length){
        let current = stack.pop()


        if(current){
            finl+=""+current
        }
    }

    return finl
}

console.log(rev("aidrin "));
