const log = console.log;

function Node(data) {
  this.data = data;
  this.next = null;
}

function Queue() {
  this.front = null;
  this.rear = null;

  this.isEmpty = () => {
    return this.front === null && this.rear === null;
  };

  this.insert = function (data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      console.log(1, newNode);
      this.front = newNode;
    } else {
      console.log(2, newNode);
      this.rear.next = newNode;
    }

    this.rear = newNode;
  };

  this.remove = () => {
    if (this.isEmpty()) {
      return null;
    }

    console.log(3, this.front);
    this.front = this.front.next;

    if (!this.front) {
      console.log(4, this.rear);
      this.rear = null;
    }
  };

  this.peekFront = () => {
    if (this.isEmpty()) {
      return;
    }

    return this.front.data;
  };

  this.display = () => {
    if (this.isEmpty()) {
      return null;
    }

    let cur = this.front;
    let list = [];

    while (cur !== this.rear) {
      list = [...list, cur.data];
      process.stdout.write(`${cur.data} -> `);
      cur = cur.next;
    }

    process.stdout.write(`${this.rear.data} \n`);
    return [...list, cur.data];
  };
}

const queue = new Queue();

log("#######");
queue.insert(1);
queue.insert(2);
queue.insert(3);
queue.display();
queue.remove();
queue.remove();
queue.remove();
queue.insert(1);
