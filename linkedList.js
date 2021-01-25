class NodeList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  get size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  clear() {
    this.head = null;
  }
  get getLast() {
    let node = this.head;
    if (node) {
      while (node.next) {
        node = node.next;
      }
    }
    return node;
  }
  get getFirst() {
    return this.head;
  }
}

let node1 = new NodeList(2);
let node2 = new NodeList(5);
node1.next = node2;

const list = new LinkedList(node1);

console.log(list.size);
console.log(list.getLast);
console.log(list.getFirst);
list.clear();
console.log(list.size);
