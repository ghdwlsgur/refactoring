function reverseTraversalRecursive(node, callback) {
  if (node) {
    reverseTraversalRecursive(node.next, callback);
    callback(node.value);
  }
}

export default function reverseTraversal(linkedList, callback) {
  reverseTraversalRecursive(linkedList.head, callback);
}
