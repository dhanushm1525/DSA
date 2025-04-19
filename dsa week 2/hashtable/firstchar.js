function frist(str){
    const table = new Array(256)

    for(char of str){
        let index = char.charCodeAt(0)

        if(table[index]){
            return char
        }

        table[index] = true
    }

    return null
}








function chha(str){
    const table = new Array(256)

    for(char of str){
        let index = char.charCodeAt(0)
        if(table[index]){
            return char
        }

        table[index] = true
    }
    return null

}




function gko(str){
    const table = new Array(256).fill(false)

    for(char of str){
        let index = char.charCodeAt(0)
        if(table[index]){
            return char
        }

        table[index] = true
    }
    return null

}




function cjeck(str){
    const table = new Array(256)

    for(char of str){
        index = char.charCodeAt(0)
        if(table[index]){
            return char 
        }
        table[index] = true
    }

    return null
}
console.log(cjeck("dhanush"));


function vaa(str){
    const hash =new Array(256)

    for(char of str){
        index = char.charCodeAt(0)

        if(table[inedx]){
            return char
        }

        table[index ] = true
    }
    return  null
    }



