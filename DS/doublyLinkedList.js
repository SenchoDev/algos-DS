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
  pop(){
    if(!this.head) return undefined;
    var poppedNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift(){
    if(this.length === 0) return undefined;
    var oldHead = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val){
    var newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length) return null;
    if(index <= this.length / 2){
      var count = 0;
      var current = this.head;
      while(count !== index){
        current = current.next;
        count++;
      }
      
    } else { 
      var count = this.length - 1;
      var current = this.tail;
      while(count !== index){
        current = current.prev;
        count--;
      }
    }
    return current;
  }  
}

const list = new DoublyLinkedLists();
list.push(12)
list.push(13)
list.push(12)
list.push(13)
list.push(12)
list.push(13)
list.push(12)
list.push(13)
