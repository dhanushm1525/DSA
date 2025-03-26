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


console.log(reverse("azia is vaazha"));
