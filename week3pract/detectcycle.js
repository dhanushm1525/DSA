function hasCycleUndirected(graph) {
    const visited = new Set();
  
    function dfs(node, parent) {
      visited.add(node);
  
      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          if (dfs(neighbor, node)) return true;
        } else if (neighbor !== parent) {
          // If visited and not parent, cycle detected
          return true;
        }
      }
  
      return false;
    }
  
    for (let node in graph) {
      if (!visited.has(node)) {
        if (dfs(node, -1)) return true;
      }
    }
  
    return false;
  }

  
  
  