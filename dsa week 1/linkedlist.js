class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === null
    }

    getSize() {
        return this.size
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++

    }


    prepend(value) {
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.size++
    }

    Insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }

        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }

    }

    remove(index) {
        if (index < 0 || index > this.size) {
            return null
        }

        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeVal(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value != value) {
                prev = prev.next
            }
            if (prev.next) {
                let removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print() {
        if (this.isEmpty()) {
            console.log("the list is empty")
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }

    }

    middle() {
        let fast = this.head
        let slow = this.head
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }
        console.log(slow.value)
    }
}

const list = new LinkedList()


list.prepend(10)
list.prepend(30)
list.prepend(20)
list.append(50)



list.print()








//using tail
// append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//         this.head = node;
//         this.tail = node; // Update tail
//     } else {
//         this.tail.next = node; // Directly link new node
//         this.tail = node; // Update tail to new node
//     }
//     this.size++;
// }



remove(index){
    if(index<0||index>this.size){
        return 
    }

    let removedNode
    if(index===0){
        removedNode= this.head
        this.head = this.head.next
    
    }else{
        let prev = this.head
        for(let i=0;i<index-1;i++ ){
            prev = prev.next
        }
        removedNode= prev.next
        prev.next = removedNode.next
    }
    this.size--


}