class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linded{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }


    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next = node

        }
        this.size++
    }

    getSize(){
        console.log(this.size);
         
    }

    
    insert(value,index){
        if(index<0||index>this.size){
            return 
        }

        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i =0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }


    print(){
        if(this.isEmpty()){
            console.log("empty");
            
        }else{
            let curr = this.head
            let val = ''
            while(curr){
                val+=`${curr.value} `
                curr=curr.next
            }
            console.log(val);
            
        }
    }


    search(value){
        if(this.isEmpty()){
            return -1
        }else{
            let curr=this.head
            let i = 0
            while(curr){
                if(curr.value===value){
                    console.log(i);
                    
                }
                curr = curr.next
                i++
            }
        }
    }



remove(index){
    if(index<0||index>this.size){
        return 
    }
    let removed
    if(index===0){
        removed = this.head
        this.head = this.head.next
        
    }else{
        let prev = this.head
        for(let i = 0;i<index-1;i++){
            prev = prev.next
        }

        removed = prev.next
        prev.next = removed.next
    }
    this.size--
    return removed.value
}


removed(value){
    if(this.isEmpty()){
        return null
    }

    if(this.head.value===value){
        this.head = this.head.next
        this.size--
    }else{
        let prev = this.head 
     
        while(prev.next&&prev.next.value!==value){
            prev = prev.next
        }

        if(prev.next){
            let removed = prev.next
            prev.next = removed.next
            this.size--
        }
    }
    return -1
}


reverse(){
    let curr = this.head
    let prev = null
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
}





}

const link = new Linded()

link.prepend(32)
link.prepend(10)
link.prepend(45)
link.prepend(12)
link.append(200)
link.insert(100,3)
link.search(100)
link.remove(3)
link.removed(45)
link.print()
link.reverse()






link.print()



Drev(){
    let curr = this.head
    let temp
    while(curr){
        temp = curr.prev
        curr.prev = curr.next
        curr.next = temp

        curr = curr.prev
    }
if(temp){
    this.head = temp.prev
}
}