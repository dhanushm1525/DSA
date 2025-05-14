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


    heapdown(index){
        let largest = index 
        let left = this.getleft(index)
        let rigth = this.getright(index)

        if(left<this.heap.length&&this.heap[left]>this.heap[largest]){
            largest = left
        }

        if (rigth<this.heap.length&&this.heap[rigth]>this.heap[largest]) {
            largest = rigth
        }

        if(largest !== index){
            this.swap(index,largest)
            this.heapdown(largest)
        }
    }


    
}

