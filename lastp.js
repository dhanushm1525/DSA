class Node{
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return  this.root === null
    }


    insert(value){
        const newNode = new Node(value)

        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
    if(newNode.value<root.value){
        if(root.left === null){
            root.left = newNode
        }else{
            this.insertNode(root.left,newNode)
        }
    }else{
        if(root.right===null){
            root.right = newNode
        }else{
            this.insertNode(root.right,newNode)
        }
    }

    }

  isBst(node = this.root, min = -Infinity , max = Infinity ){
    if(!node){
        return true
    }

    if(node.value<=min||node.value>=max){
        return false
    }

    return (
        this.isBst(node.left,min,node.value)&&
        this.isBst(node.right,node.value,max)
    )
  }

  inorder(root) {
    if (root) {
        this.inorder(root.left)
        console.log(root.value)
        this.inorder(root.right)

    }
}


BFS() {
    const queue = []
    queue.push(this.root)
    while (queue.length) {
        let curr = queue.shift()
        console.log(curr.value)

        if (curr.left) {
            queue.push(curr.left)
        }

        if (curr.right) {
            queue.push(curr.right)
        }
    }
}

}

const Bst = new BST()
 

Bst.insert(20)
Bst.insert(15)
Bst.insert(25)
Bst.insert(10)
Bst.insert(30)
Bst.BFS()
console.log(Bst.isBst(Bst.root));
