import DoublyLinkedListNode from './DoyblyLinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class DoublyLinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value) {
    // Make new node to be a head.
    const newNode = new DoublyLinkedListNode(value, this.head);

    // If there is head, then it won't be head anymore.
    // Therefore, make its previous reference to be new node (new head).
    // Then mark the new node as head.
    if (this.head) {
      // 만약 head가 존재한다면
      //======================================================
      //     ----------------------         ------------
      //    | this.head.previous  | <====> | this.head |
      //    ----------------------         ------------
      //======================================================
      this.head.previous = newNode;
    }
    // head가 존재하지 않으면
    this.head = newNode;

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value);

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    //======================================================
    //     ----------------         -----------------
    //    |   this.tail   | <====> | this.tail.next |
    //    ----------------         -----------------
    //======================================================
    // Attach new node to the end of linked list.
    this.tail.next = newNode;

    // Attach current tail to the new node's previous reference.
    newNode.previous = this.tail;

    // Set new node to be tail of linked list.
    this.tail = newNode;

    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          // If HEAD is going to be deleted

          // Set head to second node, which will become new head.
          this.head = deletedNode.next;

          // Set new head's previous to null.
          if (this.head) {
            this.head.previous = null;
          }

          // If all the nodes in list has same value that is passed as argument
          // then all nodes will get deleted, therefore tail needs to be updated.
          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          // If TAIL is goint to be deleted ...

          // Set tail to second last node, which will become new tail.
          this.tail = deletedNode.previous;
          this.tail.next = null;
        } else {
          // If MIDDLE node is going to be deleted
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }
      currentNode = currentNode.next;
    }
    return deletedNode;
  }

  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;

    while (currentNode) {
      // If callback is sepcified then try to find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // If value is specified then try to compare by value..
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // 꼬리 자르기
  deleteTail() {
    if (!this.tail) {
      // No tail to delete.
      return null;
    }

    /*
      노드가 1개일 경우 this.head와 this.tail이 같은 value 값
      하지만 노드가 여러개일 경우 ex) 1, 2, 3
      여기서 this.head는 1이고, this.tail은 3이다.
    */
    if (this.head === this.tail) {
      // There is only one node in linked list.
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;

      return deletedTail; // 삭제 후 this.tail값 반환
    }

    // If there are many nodes in linked list ...
    const deletedTail = this.tail;

    this.tail = this.tail.previous;
    this.tail.next = null; // 꼬리 자르기 이므로 다음 노드는 당연히 null값

    return deletedTail;
  }

  // 머리 자르기
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  fromArray(value) {
    value.forEach(value => this.append(value));

    return this;
  }

  toString(callback) {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString();
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currNode) {
      nextNode = currNode.next;
      prevNode = currNode.previous;

      // Change next nodes of the current node so it would link to previous node.
      currNode.next = prevNode;
      currNode.previous = nextNode;

      // Move prevNode and currnode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
