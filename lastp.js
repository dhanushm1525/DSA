// class Graph{
//     constructor(){
//         this.adjlist={}
//     }


// addvertex(vertex){
//     if(!this.adjlist[vertex]){
//         this.adjlist[vertex] = new Set()
//     }
// }

// addEdge(vertex1,vertex2){
//     if(!this.adjlist[vertex1]){
//         this.addvertex(vertex1)
//     }
//     if(!this.adjlist[vertex2]){
//         this.addvertex(vertex2)
//     }

//     this.adjlist[vertex1].add(vertex2)
//     this.adjlist[vertex2].add(vertex1)
// }

// display(){
//     for(let vertex in this.adjlist){
//         console.log(vertex+"->"+[...this.adjlist[vertex]]);
        
//     }
// }

//  hasEdge(vertex1,vertex2){
//      return(
//         this.adjlist[vertex1].has(vertex2)&&
//         this.adjlist[vertex2].has(vertex1)
//      )
//  }

//  deleteEdge(vertex1,vertex2){
//     this.adjlist[vertex1].delete(vertex2)
//     this.adjlist[vertex2].delete(vertex1)
//  }

//     deleteVertex(vertex){
//         if(!this.adjlist[vertex]){
//             return 
//         }
//         for(let adjecentvertex of this.adjlist[vertex]){
//             this.deleteEdge(vertex,adjecentvertex)
//         }
//         delete this.adjlist[vertex]
//     }

//     bfs(start){
//         let queue =[start]
//         let visited = new Set();

//         while(queue.length>0){
//             let node = queue.shift()
//             if(!visited.has(node)){
//                 console.log(node);
//                 visited.add(node)
//                 queue.push(...this.adjlist[node])
                
//             }
//         }
//     }

//     dfs(node,visited = new Set()){
//         if(visited.has(node)) return

//         console.log(node);
//         visited.add(node)
//         for(let neighbor of this.adjlist[node]){
//             this.dfs(neighbor,visited)
//         }
        
//     }



// }

///////////////////////////////////////////////////////////
//Tree


class Node{
    constructor(value){
        this.value = value
        this.left = null 
         this.right = null
    }
}

class bst{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root===null
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
            if(root.left===null){
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


    
}