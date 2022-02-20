export default class DoublyLinkedListNode {
  // next = 다음 노드, previous = 이전 노드
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
