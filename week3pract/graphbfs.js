function bfs(start){
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




dfs(node, visited = new Set()) {
    if (visited.has(node)) return;
    console.log(node);
    visited.add(node);
    for (let neighbor of this.adjecencyList[node]) {
        this.dfs(neighbor, visited);
    }
}




bfs(start){
    let queue = [start]
    let visited = new Set()

    while(queue.length>0){
        let node = queue.shift()
        if(!visited.has(node)){
            console.log(node);
            visited.add(node)
            queue.push(...adjecencyList[node])
            
        }
    }
}


dfs(node,visited = new Set()){
    if(visited.had(node)) return

    console.log(node);
    visited.add(node)
    for(let neighbor of adjecencyList[node]){
        this.dfs(neighbor,visited)
    }
    
}