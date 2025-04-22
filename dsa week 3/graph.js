class Graph{
    constructor(){
        this.adjecencyList={}
    }

    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + "->" + [...this.adjecencyList[vertex]]);
            
        }
    }

    hasEdge(vertex1,vertex2){
        return(
            this.adjecencyList[vertex1].has(vertex2)&&this.adjecencyList[vertex2].has(vertex1)
        )
    }


    deleteEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }

    deleteVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return 
        }

        for(let adjecentvertex of this.adjecencyList[vertex]){
            this.deleteEdge(vertex,adjecentvertex)
        }

        delete this.adjecencyList[vertex]
    }

    bfs(start){
        let queue  = [start]
        let visited = new Set();
    
        while(queue.length>0){
            let node = queue.shift()
            if(!visited.has(node)){
                console.log(node)
                visited.add(node)
                queue.push(...this.adjecencyList[node])
                
            }
        }
    }

    dfs(node,visited = new Set()){
        if(visited.has(node)) return;
        

        console.log(node);
        visited.add(node)
        for(let neighbor of this.adjecencyList[node]){
            this.dfs(neighbor,visited)
        }
        
    }

}



const graph = new Graph()


graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addVertex(7)
graph.addVertex(8)
graph.addVertex(9)


graph.addEdge(1,2)
graph.addEdge(3,6)
graph.addEdge(4,9)
graph.addEdge(9,1)
graph.addEdge(1,3)
graph.addEdge(2,5)
graph.addEdge(5,8)
graph.addEdge(8,7)
graph.addEdge(7,6)
graph.addEdge(6,2)
graph.addEdge(7,9)
graph.addEdge(9,2)
graph.addEdge(8,3)
graph.addEdge(3,4)






graph.deleteVertex(9)


console.log("----------------------------------------------------------");
graph.display()

console.log("----------------------------------------------------------");

graph.bfs(1)
console.log("----------------------------------------------------------");
graph.dfs(1)