class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}


class weightedGraph{
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({node: v2, weight});
    this.adjacencyList[v2].push({node: v1, weight});
  }

  Dijkstra(start, finish){

    const nodes = new  PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;

    // build up initial state
    for(let vertex in this.adjacencyList){
      if(vertex === start){
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0); 
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity); 
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while(nodes.values.length){
      smallest = nodes.dequeue().val;

      if(smallest === finish){
        // we are Done

        // build up path 
      }

      if(smallest || distances[smallest] !== Infinity){
        for(let neighbor in this.adjacencyList[smallest]){
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          console.log(nextNode)
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          
        }
      }
    }
  }
}


const g = new weightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("D", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

g.Dijkstra("A", "B")






