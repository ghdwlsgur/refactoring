import Sort from '../Sort';

export default class QuickSortInPlace extends Sort {
  sort(
    originalArray,
    inputLowIndex = 0,
    inputHighIndex = originalArray.length - 1,
    recursiveCall = false,
  ) {
    const array = recursiveCall ? originalArray : [...originalArray];

    const partitionArray = (lowIndex, highIndex) => {
      const swap = (leftIndex, rightIndex) => {
        const temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
      };

      const pivot = array[highIndex];

      this.callbacks.visitingCallback(pivot);

      let partitionIndex = lowIndex;
      for (
        let currentIndex = lowIndex;
        currentIndex < highIndex;
        currentIndex += 1
      ) {
        if (this.comparator.lessThan(array[currentIndex], pivot)) {
          swap(partitionIndex, currentIndex);
          partitionIndex += 1;
        }
      }
      swap(partitionIndex, highIndex);

      return partitionIndex;
    };

    if (inputLowIndex < inputHighIndex) {
      const partitionIndex = partitionArray(inputLowIndex, inputHighIndex);
      const RECURSIVE_CALL = true;
      this.sort(array, inputLowIndex, partitionIndex - 1, RECURSIVE_CALL);
      this.sort(array, partitionIndex + 1, inputHighIndex, RECURSIVE_CALL);
    }

    return array;
  }
}
