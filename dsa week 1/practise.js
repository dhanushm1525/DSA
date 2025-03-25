class Node{
    constructor(value){
        this.value = value
        this.next  = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
          let  prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++

    }

    insert(value , index){
        if(index<0||index>this.size){
            return 
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)            
            let prev = this.head
            for(let i = 0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
        

    }

    remove(index){
        if(index<0||index>this.size){
            return null
        }
        let removedNode
        if(index===0){
            removedNode = this.head
            this.head = this.head.next
        }else{

            let prev = this.head
            for(let i = 0;i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode

    }

    print(){
        if(this.isEmpty()){
            console.log("the list is empty")
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValues)
        } 

    }

};

const link = new LinkedList()


link.append(1)
link.append(3)
link.append(2)
link.prepend(23)
link.insert(67,3)
link.remove(3)
link.print()


rev(){
    let cur = this.head
    let temp
    while(cur){
        temp = cur.prev
        cur.prev  = cur.next
        cur.prev = temp

        cur = cur.prev
    }
    if(temp){
        this.head = temp.prev
    }
};

print(){
    if(isEmpty()){
        console.log("empty")
        
    }else{
        let curr = this.head
        let val = ''
        while(curr){
            val += `${curr.value} `
            curr = curr.next
        }
        console.log(val);
        
    }
};

rev(){
    let curr = this.head
    let temp
    while(curr){
        temp = curr.prev
        curr.prev = curr.next
        curr.prev = temp

        curr= curr.prev
    }

    if(temp){
        this.head = temp.prev
    }
};



Rev(){
    let curr = this.head
    let temp
    while(curr){
        temp = curr.prev
        curr.prev  = curr.next
        curr.next = temp

        curr=curr.prev
    }
    if(temp){
        this.head = temp.prev
    }
}



append(){
    if(this.isEmpty()){
        this.head = node

    }else{
        let prev = this.head
        while(prev.next){
            prev =prev.next
        }
        prev.next = node

    }
    this.size++
}

prepend(){
    if(this.isEmpty()){
    
    }
}