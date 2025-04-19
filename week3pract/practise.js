class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class tree{
    constructor(){
        this.root = null
    }


    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node = new Node(value)
        
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
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
            if(root.right  === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
            
        }
    }

  delete(value){
    this.root = this.deleteNode(this.root,value)
  }

  deleteNode(root,value){
    if(root===null){
        return root
    }
    if(value<root){
        return this.deleteNode(root.left,value)
    }else if(value>root){
        return this.deleteNode(root.right,value)
    }else{
        if(!root.rigth&&!root.left){
            return null
        }
        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }

        root.value= this.min(root.right)
        this.right = this.deleteNode(root.right,value) 
    }

    return root

  }


  closest(target){
    let currentNode = this.root
    let closest  = this.root.value

    while(currentNode!==null){
        if(Math.abs(target-closest)>Math.abs(target-currentNode.value)){
            closest= currentNode.value
        }

        if(target<currentNode.value){
            currentNode=currentNode.left
        }else if(target>currentNode.value){
            currentNode=currentNode.right
        }else{
            break
        }
    }
    return closest
  }
}


const bbb = new tree()
bbb.insert(89)
bbb.insert(4)
bbb.insert(9)
bbb.insert(454)
bbb.insert(545)
bbb.insert(68)
console.log(bbb.closest(5));
