class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(data) {
    this.top = new Node(data, this.top);
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    console.log(this.top.data);
    this.top = this.top.next;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    console.log(this.top.data);
  }

  display() {
    if (this.isEmpty()) {
      return null;
    }

    let cur = this.top;

    while (cur.next) {
      console.log(cur.next);
      console.log(cur.data);
      cur = cur.next;
    }
    console.log(cur.data);
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack["push"](5);
stack.peek();
stack.pop();
stack.display();
