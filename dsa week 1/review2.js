//insert , remove and reverse


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }


    insert(value,index){
        if(index<0||index>this.size){
            return null
        }
        const node = new Node(value)
        if(index===0){
            
            this.head = node
        
        }else{
           
            let prev = this.head
            for(let i =0;i<index-1;i++){
                prev = prev.next
            }
            node.next  = prev.next 
            prev.next = node

        }

        this.size++
    }


    print(){
        if(this.isEmpty()){
            console.log("the list is empty");
            
        }else{
            let curr = this.head
            let values = ''
            while(curr){
                values+=`${curr.values} `
                curr = curr.next
            }
            console.log(values);
            
        }
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


    remove(index){
        if(index<0||index>this.size){
            return null
        }
        let removedNode
        if(index ===0){
            removedNode = this.head
            this.head = removedNode.next
        }
        this.size--
    }



}


const link = new linkedList()

link.insert(10,0)
link.insert(20,1)
link.insert(30,2)
link.insert(40,3)
link.print()