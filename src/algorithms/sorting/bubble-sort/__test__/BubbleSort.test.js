import BubbleSort from '../BubbleSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 20; // sortedArr
const NOT_SORTED_ARRAY_VISITING_COUNT = 189; // notSortedArr
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209; // reverseArr
const EQUAL_ARRAY_VISITING_COUNT = 20; // equalArr

describe('BubbleSort', () => {
  it('should sort array', () => {
    SortTester.testSort(BubbleSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(BubbleSort);
  });

  it('should do stable sorting', () => {
    SortTester.testSortStability(BubbleSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(BubbleSort);
  });

  // equalArr [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];
  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmsTimeComplexity(
      BubbleSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  // sortedArr [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];
  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmsTimeComplexity(
      BubbleSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  // notSortedArr [ 15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19,];
  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmsTimeComplexity(
      BubbleSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  // reverseArr [ 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,];
  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmsTimeComplexity(
      BubbleSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
