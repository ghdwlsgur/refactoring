import LinkedList from '../../../../data-structures/linked-list/LinkedList';
import reverseTraversal from '../reverseTraversal';

describe('reverseTraversal', () => {
  it('should traverse linked list in reverse order', () => {
    const linkedList = new LinkedList();

    linkedList.append(1).append(2).append(3);

    const traversedNodeValues = [];
    const traversalCallback = nodeValue => {
      traversedNodeValues.push(nodeValue);
    };
    reverseTraversal(linkedList, traversalCallback);
    expect(traversedNodeValues).toEqual([3, 2, 1]);
  });
});
