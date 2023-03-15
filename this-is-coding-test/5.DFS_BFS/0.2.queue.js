class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null && this.rear === null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }

    this.rear = newNode;
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }

    this.front = this.front.next;

    if (!this.front.next) {
      this.rear = null;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    console.log(this.front.data);

    return this.front.data;
  }

  display() {
    if (this.isEmpty()) {
      return null;
    }

    let cur = this.front;

    while (cur.next) {
      console.log(cur.data);
      cur = cur.next;
    }
    console.log(cur.data);
  }
}

const queue = new Queue();

queue.insert(1);
queue.insert(2);
queue.insert(3);
queue.insert(4);
queue.insert(5);
queue.insert(6);
queue.peek();
queue.remove();
queue.display();
