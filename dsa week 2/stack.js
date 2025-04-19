class Stack{
    constructor(){
        this.stack = []
    }


    isEmpty(){
        return this.size === 0
    }


    push(value){
        this.stack.push(value)
    }

    // print(){
    //   for(let i = 0;i<this.stack.length;i++){
    //     console.log("testing");
        
    //     let curr = stack[i]
    //   }
    //   if(curr){
    //     console.log(curr);
        
    //   }
    // }

    peek(){
        console.log(this.stack[0]);
        
    }


    reverse(){
        let result = []
for(let i=0;i=this.stack.length;i++){
        result.push(this.stack.pop())
}

return result


    }


}


const stackk = new Stack()

stackk.push(5)
stackk.push(89)
stackk.push(6)
stackk.push(45)
stackk.peek
console.log(stackk.reverse());

