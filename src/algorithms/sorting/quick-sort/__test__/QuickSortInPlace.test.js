import QuickSortInPlace from '../QuickSortInPlace';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

const SORTED_ARRAY_VISITING_COUNT = 19;
const NOT_SORTED_ARRAY_VISITING_COUNT = 12;
const REBERSE_SORTED_ARRAY_VISITING_COUNT = 19;
const EQUAL_ARRAY_VISITING_COUNT = 19;

describe('QuickSortInPLace', () => {
  it('should sort array', () => {
    SortTester.testSort(QuickSortInPlace);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(QuickSortInPlace);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(QuickSortInPlace);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmsTimeComplexity(
      QuickSortInPlace,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmsTimeComplexity(
      QuickSortInPlace,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmsTimeComplexity(
      QuickSortInPlace,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REBERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmsTimeComplexity(
      QuickSortInPlace,
      reverseArr,
      REBERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
