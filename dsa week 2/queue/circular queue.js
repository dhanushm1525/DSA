class Cqueue{
    constructor(size){
        this.size = size
        this.queue = new Array(size)
        this.front = -1
        this.rear = -1
    }

    isEmpty(){
        return this.front === -1
    }

    isFull(){
        return (this.rear+1)%this.size === front
    }

    enque(value){
        if(this.isFull()){
            return "queue is full"
        }     

        if(this.isEmpty()) this.front = 0
        this.rear = (this.rear+1)%this.size
        this.queue[this.rear] = value
    }


    dequeue(){
        if(this.isEmpty()){
            return "this queue is empty"
        }

        let element  = this.queue[this.front]
        if(this.front===this.rear){
            this.front = -1
            this.rear = -1
        }else{
            this.front = (this.front+1)%this.size
        }

        return element
    }


    print(){
        
    }
}