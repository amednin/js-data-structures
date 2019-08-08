export default class Node {
  value = null;
  next = null;

  constructor(value) {
    this.value = value;
    this.next = new Node(null);
  }

  setValue(value) {
    this.value = value;
  }

  getValue() {
    return value;
  }

  setNext(node) {
    this.next = node;
  }

  getNext() {
    return this.next;
  }
}
