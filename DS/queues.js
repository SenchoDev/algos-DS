class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  //ADDS TO END
  enqueue(val){
    var newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  
  // REMOVES FROM BEGGING
  dequeue(){
    if(!this.first) return null;

    var temp = this.first;
    if(this.first === this.last){ 
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value
  }
}

const q = new Queue();