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
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  //breath first search (horizontal way of searching)
  BFS(){
    var data = [],  queue = [], node = this.root;
    queue.push(this.root);
    while(queue.length){
      node = queue.shift();
      data.push(node);
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
  }
  // depth first search - preorder
  DFSPreOrder(){
    var data = [];
    function traverse(node){
      data.push(node);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root)
    return data;
  }
  // depth first serach - postorder
  DFSPostOrder(){
    var data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node);
    }
    traverse(this.node);
    return data;
  }
  // depth first search - inorder 
  DFSInOrder(){
    var data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      data.push(node);
      if(node.right) traverse(node.right);
    }
    traverse(this.node);
    return data;
  }
}
// finding and inserting O(log n) Not guaranteed
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
