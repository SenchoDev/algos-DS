// piece of data - val
// refrence to next node - next

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how")
// first.next.next.next = new Node("r u");

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail=  null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    var current = this.head
    var newTail = current;
    while(current.next){
      newTail = current; 
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead;
  }
  // traverse(){
  //   var current = this.head;
  //   while(current){
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }
}
var list = new SinglyLinkedList();
list.push("HELLO")
