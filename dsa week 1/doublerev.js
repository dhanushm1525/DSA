class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }

}

class Doublelinked{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){ 
        return this.size === 0
    }

    print(){
        if(this.isEmpty()){
            console.log("the list is  empty")
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues+=`${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
            

        }
    }

    reverse(){
        let curr = this.head
        let temp = null

        while(curr){
         temp  = curr.prev
         curr.prev = curr.next
         curr.next = temp
          
            curr = curr.prev
        }

        if(temp){
            this.head = temp.prev
        }
    }






    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }


}

const list = new Doublelinked()

list.append(12)
list.append(69)
list.append(44)
list.append(46)
list.print()
list.reverse()
list.print()