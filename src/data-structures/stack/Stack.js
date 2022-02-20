import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  // Stack이 비어있으면 true를 반환, 그렇지 않으면 false를 반환
  isEmpty() {
    // The stack is empty if its linked list doesn't have a head.
    return !this.linkedList.head;
  }

  // Stack의 top에 있는 요소를 삭제하지 않고 해당 item을 반환
  peek() {
    if (this.isEmpty()) {
      // It the linked list is empty then there is nothing to peek from.
      return null;
    }
    return this.linkedList.head.value;
  }

  // 해당 item을 Stack의 top에 삽입
  push(value) {
    // Pushing means to lay the value on top of the stack. Therefore let's just add
    // the new value at the start of the linked list.
    this.linkedList.prepend(value);
  }

  // Stack의 top에 있는 item을 삭제하고 해당 item을 반환
  pop() {
    // Let's try to delete the first node (the head) from the linked list.
    // If there is no head (the linked list is empty) just return null.
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  toArray() {
    return this.linkedList
      .toArray()
      .map(linkedListNode => linkedListNode.value);
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
