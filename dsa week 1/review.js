class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class Linded{
    constructor(){
        this.size = 0
        this.head = null
        this.tail = null
        
    }

    isEmpty(){
        return this.size ===0
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("empty");
            
        }else{
            let curr = this.head
            let val= ''

            while(curr){
                val+=`${curr.value} `
                curr = curr.next
            }
            console.log(val);
        }
      
        
    }


    remove(index){
        if(index<0||index>this.length-1){
            return 
        }
        let removed 
        if(index===0){
            removed = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i =0; i<index-1;i++){
                prev = prev.next
            }
            removed = prev.next
            prev.next = removed.next
        }
        this.size--
        return removed.value
    }

    reverse(){
        let curr = this.head
        let prev = null

        while(curr){
         let next = curr.next
         curr.next = prev
         prev = curr
         curr= next
        }

       
            this.head = prev
        
    }

}

const link = new Linded()
link.append(78)
link.append(54)
link.append(10)

link.print()
link.reverse()

link.print()
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class Linked {
//     constructor() {
//         this.size = 0;
//         this.head = null;
//         this.tail = null;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     append(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = this.tail = node;
//         } else {
//             this.tail.next = node;
//             node.prev = this.tail;
//             this.tail = node;
//         }
//         this.size++;
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log("empty");
//         } else {
//             let curr = this.head;
//             let val = "";

//             while (curr) {
//                 val += `${curr.value} `;
//                 curr = curr.next;
//             }
//             console.log(val.trim());
//         }
//     }

//     remove(index) {
//         if (index < 0 || index >= this.size) {
//             return;
//         }

//         let removed;
//         if (index === 0) {
//             removed = this.head;
//             this.head = this.head.next;
//             if (this.head) this.head.prev = null;
//         } else if (index === this.size - 1) {
//             removed = this.tail;
//             this.tail = this.tail.prev;
//             if (this.tail) this.tail.next = null;
//         } else {
//             let curr = this.head;
//             for (let i = 0; i < index; i++) {
//                 curr = curr.next;
//             }
//             removed = curr;
//             curr.prev.next = curr.next;
//             curr.next.prev = curr.prev;
//         }

//         this.size--;
//         return removed.value;
//     }

//     reverse() {
//         let curr = this.head;
//         let temp = null;

//         while (curr) {
//             temp = curr.prev;
//             curr.prev = curr.next;
//             curr.next = temp;
//             curr = curr.prev;
//         }

//         if (temp) {
//             this.head = temp.prev;
//         }
//     }
// }

// const link = new Linked();
// link.append(78);
// link.append(54);
// link.append(10);

// link.print();
// link.reverse();
// link.print();
