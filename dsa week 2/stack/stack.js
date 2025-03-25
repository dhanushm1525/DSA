class Stack{
    constructor(){
        this.stack=[]
    }


    push(value){
        this.stack.push(value)
    }

    isEmpty(){
        return this.stack.length ===0
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
}


const Sta = new Stack()

Sta.push(69)
Sta.push(10)
Sta.push(5)
Sta.push(12)
Sta.pop()
console.log(Sta.size());

console.log(Sta.peek());
