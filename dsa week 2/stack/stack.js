class Stack{
    constructor(){
        this.stack=[]
    }



    push(value){
        this.stack.push(value)
    }

    isEmpty(){
        return this.stack.length===0
    }

    pop(){
        if(this.isEmpty()){
            return "stack is empty"
        }

        return this.stack.pop()
    }


    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }

        return this.stack[this.size()-1]
    }

    size(){
        return this.stack.length
    }

    stackprint(){
        if (this.isEmpty()) {
            return "the stack is empty"
        }

        console.log(this.stack.join(' '));
        
    }

    priint(){
        if(this.isEmpty()){
            return "th stvk is empty"
        }

        for(let i = this.stack.length-1;i>=0;i--){
            console.log(this.stack[i]);
            
        }
    }


    reverse(){
        if(this.isEmpty()){
            return "cant reverse a empty string"
        }

        let temp = []

        while(!this.isEmpty()){
            temp.push(this.pop())
        }
        this.stack = temp
    }

    rev(){
        if(this.isEmpty()){
            return "the stavck is empty"
        }

        let temp = []
        while(!this.isEmpty()){
            temp.push(this.pop())
        }

        this.stack = temp
    }
}


const Sta = new Stack()

Sta.push(69)
Sta.push(10)
Sta.push(5)
Sta.push(12)
Sta.pop()


Sta.priint()
console.log("......>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

Sta.rev()
Sta.priint()

