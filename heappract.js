class heap{
    constructor(){
        this.heap = []
    }

    getleft(index){
        return 2*index+1
    }

    getright(index){
        return 2*index+2
    }

    getparent(index){
        return Math.floor((index-1)/2)
    }

    hasparent(index){
        return this.getparent(index)>=0
    }

    swap(a,b){
        [this.heap[a],this.heap[b]] = [this.heap[b],this.heap[a]]
    }

    heapup(index){
        while(this.hasparent(index)&&this.heap[this.getparent(index)]<this.heap[index]){
            this.swap(index,this.getparent(index))
            index = this.getparent(index)
        }
    }


    
}

