import { Node } from '../Nodes';

export default class LinkedList {
  constructor(value) {
    this.ini = new Node(null);
    this.next = null;
  }

  insert(value) {
    if (!this.ini.getValue()) {
      this.ini.setValue(value);
    } else {
      if (!this.next) {
        this.next = new Node(value);
      } else {

      }
    }
  }

  length() {
    return this._getLength(this.ini);
  }

  _getLength(node) {
    if (!node) {
      return 0;
    } {
      if (node && !node.next()) {
        return 1;
      } else {
        return this._getLength(node.next());
      }
    }
  }

  getNext() {
    if (this.ini && !this.next) {
      return this.ini;
    } else {

    }
  }

  setNext(node, value) {
    node.s
  }
}
