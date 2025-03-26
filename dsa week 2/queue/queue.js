class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(value){
        this.queue.push(value)
    }

    dequeue(){
        if(this.isEmpty()){
            return "it is empty"
        }

         return this.queue.shift()
    }

    isEmpty(){
        return this.queue.length ===0
    }

    front(){
        return this.queue[0]
    }

    print(){
        for(let i = 0;i<this.queue.length;i++){
            console.log(this.queue[i]);
            
        }
    }
}


const queue = new Queue()


queue.enqueue(12)
queue.enqueue(54)
queue.enqueue(68)
queue.enqueue(98)
queue.enqueue(23)
queue.print()
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
queue.dequeue()
queue.print()