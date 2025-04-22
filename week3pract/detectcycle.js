function hasCycleUndirected(graph) {
  const visited = new Set();

  const dfs = (node, parent) => {
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true; // Cycle found
      }
    }

    return false;
  };

  for (const node in graph) {
    if (!visited.has(node) && dfs(node, null)) {
      return true;
    }
  }

  return false;
}
