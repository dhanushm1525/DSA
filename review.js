// class Node{
//     constructor(){
//         this.children ={}
//         this.isEnd = false
//     }
// }


// class Trie{
//     constructor(){
//         this.root = new Node()
//     }
    
//   search(prefix){
//     let node = this.root
//     for(let char of prefix){
//         if(!node.children[char]) {
//             return false
//         }

//         node = node.children[char]
//     }
//     return true
//   }


//   insert(word){
//     let node = this.root
//     for(let char of word){
//         if(!node.children[char]){
//             node.children[char] = new Node()
//         }
//         node = node.children[char]
//     }
//     this.isEnd = true
//   }
// }

// const triee = new Trie ()

// triee.insert("like")
// triee.insert("hike")
// triee.insert("life")

// console.log(triee.search("tike"));



// class Node{
//     constructor(){
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         let newNode = new Node()
//         if(this.root === null){
//             this.root = newNode
//         }
//         this.insertNode(this.root,newNode)
//     }

//     insertNode(root,newNode){
//         if(root.value>newNode.value){
//             if(root.left===null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//    secondLargest(root){
//     let node = root
//     while(this.node.right!=null){
//         let secondargest = this.root.right.value
//         node = node.right
//     }
//     return secondargest
//    }
// }



// const bst = new BST()
// bst.insert(5)
// bst.insert(3)
// bst.insert(10)




class Graph{
   constructor(){
    this.adjecencyList = new Set()
   }

   insertVertex(vertex){
    if(!this.adjecencyList(vertex)){
        this.adjecencyList[vertex] = new Set()
    }
   }

   insertEdge(vertex1,vertex2){
    if(!this.adjecencyList[vertex1]){
        this.insertVertex(vertex1)
    }

    if(!this.adjecencyList[vertex2]){
        this.insertVertex(vertex2)
    }

    this.adjecencyList[vertex1].add(vertex2)&&
    this.adjecencyList[vertex2].add(vertex1)
   }


   dfs(start){
    let queue = [start]
    let visited= new Set()

   for(let neighbour in this.adjecencyList){
    if(visited.has(neighbour))
   }

   }
}