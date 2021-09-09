/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    this.size++;
    if(this.first !== null){
      newNode.next = this.first;
      this.first = newNode;
    }

    if(this.last === null) this.last = newNode;

    this.first = newNode;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {

    if(this.size === 0 || this.first === null){
      throw new Error("Queue is empty");
    }

   
    let value = this.first.val;
    this.first = this.first.next;
    this.size--;
    if(this.size < 2 ) this.last = this.first;
    return value;

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.first === null || this.size === 0;
  }
}

module.exports = Stack;
