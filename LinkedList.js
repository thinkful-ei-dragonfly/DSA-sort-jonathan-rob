'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertBefore(item, key) {
    let currNode = this.head;
    let prevNode = this.head;

    if (this.head === null) {
      this.head = new _Node(item, this.head);
    }
    while (currNode.value !== key) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = new _Node(item, currNode);
  }

  insertAfter(item, key) {
    let currNode = this.head;
    // let nextNode = this.head;

    while (currNode.value !== key) {
      // prevNode = currNode;
      currNode = currNode.next;
    }
    currNode.next = new _Node(item, currNode.next);
  }

  insertAt(item, location) {
    let currNode = this.head;
    let count = 1;
    if (location === 0) {
      this.head = new _Node(item, currNode);
      return;
    }
    while (count < location) {
      currNode = currNode.next;
      count++;
    }
    currNode.next = new _Node(item, currNode.next);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  printAll() {
    let currNode = this.head;
    console.log(this.head.value);
    if (!this.head) {
      return null;
    }
    while (currNode.next !== null) {
      currNode = currNode.next;
      console.log(currNode.value);
    }
    // currNode.next = currNode.next;
  }

  size() {
    let currNode = this.head;
    if (!this.head) {
      return 0;
    }
    let count = 0;
    while (currNode.next !== null) {
      currNode = currNode.next;
      count++;
    }
    return count;
  }
}

module.exports = { LinkedList, _Node } ;
