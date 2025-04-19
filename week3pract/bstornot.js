class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Helper method to check if it's a BST
    isBST(node = this.root, min = -Infinity, max = Infinity) {
      if (!node) return true;
  
      if (node.value <= min || node.value >= max) {
        return false;
      }
  
      return (
        this.isBST(node.left, min, node.value) &&
        this.isBST(node.right, node.value, max)
      );
    }
  }
  

  const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);

// Create tree
const myTree = new BinaryTree(root);

// Check if it's a BST
console.log(myTree.isBST()); // true



isBst(node,min = -Infinity,max = Infinity){
  if(!node ) return  true; 
  if(node.value<min||node.value>max){
    return false
  }

  return(
    this.isBst(node.left,min,node.value)&&
    this.isBst(node.rigth,node.value,max)
  )

}


