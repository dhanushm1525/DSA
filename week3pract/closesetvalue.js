class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    // 👇 Function to find the closest value
    findClosestValue(target) {
      let currentNode = this.root;
      let closest = this.root.value;
  
      while (currentNode !== null) {
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
          closest = currentNode.value;
        }
  
        if (target < currentNode.value) {
          currentNode = currentNode.left;
        } else if (target > currentNode.value) {
          currentNode = currentNode.right;
        } else {
          break; // Exact match
        }
      }
  
      return closest;
    }
  }
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(2);
  bst.insert(5);
  bst.insert(13);
  bst.insert(22);
  
  console.log(bst.findClosestValue(12)); // Output: 13

  
  