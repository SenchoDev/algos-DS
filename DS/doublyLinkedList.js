// Noode
// - val
// - next
// - previousNode
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedLists
// -currentHead
// -newTail
// -length

class DoublyLinkedLists{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    var newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next= newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  } 
  
}

const list = new DoublyLinkedLists();
