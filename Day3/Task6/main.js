let arr = [];
let front = -1;
let rear = -1;

function isEmpty() {
  if (front == -1) return true;
  else return false;
}

function enQueue(value) {
  if (front == -1) {
    front = front + 1;
  }
  rear = rear + 1;
  arr[rear] = value;
}

function deQueue() {
  if (front != -1) {
    arr.shift();
    if (front == rear) {
      front = -1;
      rear = -1;
    } else {
      rear = rear - 1;
    }
  }
}

function getQueue() {
  return arr;
}

function peek() {
  return arr[0];
}

enQueue("1");
console.log(getQueue());
deQueue();
console.log(getQueue());
enQueue("2");
console.log(getQueue());
enQueue("3");
console.log(getQueue());
enQueue("4");
console.log(getQueue());
deQueue();
console.log(getQueue());
enQueue("1");
console.log(getQueue());
console.log(peek());
console.log(isEmpty());
