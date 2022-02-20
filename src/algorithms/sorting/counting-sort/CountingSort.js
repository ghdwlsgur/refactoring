import Sort from '../Sort';
/*
  계수정렬
  다음의 5이하 자연수 데이터들을 오름차순으로 정렬하세요.
  ex) 1 3 2 4 3 2 5 1 2 2 3

  모든 데이터가 1부터 5사이에 속한다는 특징이 있습니다. 바로 이처럼 '범위 조건'이 있는 경우에 
  한해서 굉장히 빠른 알고리즘이 있습니다. 
  
  크기 1 2 3 4 5
  개수 2 4 3 1 1

  1. index순으로 개수를 각 크기의 개수를 counting
  2. 1부터 5까지 해당 개수만큼 출력.

  result) 1 1 2 2 2 2 3 3 3 4 5

  '크기를 기준'으로 정렬한다는 점에서 굉장히 빠른 알고리즘이다.
  모든 데이터의 크기 범위를 메모리 상에 표현할 수만 있다면 O(N)이라는 압도적인 속도로 정렬을 수행
*/

// export default class CountingSort extends Sort {
//   /**
//    * @param {number[]} originalArray
//    * @param {number} [smallestElement]
//    * @param {number} [biggestElement]
//    */
//   sort(
//     originalArray,
//     smallestElement = undefined,
//     // eslint-disable-next-line prettier/prettier
//     biggestElement = undefined
//   ) {
//     // Init biggest and smallest elements in array in order to build number bucket array later.
//     let detectedSmallestElement = smallestElement || 0;
//     let detectedBiggestElement = biggestElement || 0;

//     if (smallestElement === undefined || biggestElement === undefined) {
//       originalArray.forEach(element => {
//         // Visit element.
//         this.callbacks.visitingCallback(element);

//         // Detect biggest element
//         // element > detectedBiggestElement
//         if (this.comparator.greaterThan(element, detectedBiggestElement)) {
//           detectedBiggestElement = element;
//         }

//         // Detect smallest element.
//         // element < detectedSmallestElement
//         if (this.comparator.lessThan(element, detectedSmallestElement)) {
//           detectedSmallestElement = element;
//         }
//       });
//     }

//     // Init buckets array.
//     // This array will hold frequency of each number from originalArray.

//     // eslint-disable-next-line prettier/prettier
//     const buckets = Array(detectedBiggestElement - detectedSmallestElement + 1).fill(0);

//     originalArray.forEach(element => {
//       // Visit element.
//       this.callbacks.visitingCallback(element);
//       buckets[element - detectedSmallestElement] += 1;
//     });

//     // 누적합
//     // Add previous frequencies to the current one for each number in bucket
//     // to detect how many numbers less then current one should be standing to
//     // the left of current one.
//     for (let bucketIndex = 1; bucketIndex < buckets.length; bucketIndex += 1) {
//       buckets[bucketIndex] += buckets[bucketIndex - 1];
//     }

//     // Now let's shift frequencies to the right so that they show correct numbers.
//     // I.e if we won't shift right than the value of buckets[5] will display how many
//     // elements less than 5 should be placed to the left of 5 in sorted array
//     // INCLUDING 5th. After shifting though this number will not include 5th anymore.
//     buckets.pop();
//     buckets.unshift(0);

//     const sortedArray = Array(originalArray.length).fill(null);
//     for (
//       let elementIndex = 0;
//       elementIndex < originalArray.length;
//       elementIndex += 1
//     ) {
//       const element = originalArray[elementIndex];

//       // Visit element.
//       this.callbacks.visitingCallback(element);

//       // Get correct position of this element in sorted array.
//       const elementSortedPosition = buckets[element - detectedSmallestElement];

//       // Put element into correct position in sorted array.
//       sortedArray[elementSortedPosition] = element;

//       // Increase position of current element in the bucket for future correct placements.
//       buckets[element - detectedSmallestElement] += 1;
//     }

//     // Return sorted array.
//     return sortedArray;
//   }
// }

export default class CountingSort extends Sort {
  sort(originalArray, smallestElement = undefined, biggestElement = undefined) {
    let detectedSmallestElement = smallestElement || 0;
    let detectedBiggestElement = biggestElement || 0;

    if (smallestElement === undefined || biggestElement === undefined) {
      originalArray.forEach(element => {
        this.callbacks.visitingCallback(element);

        if (this.comparator.greaterThan(element, detectedBiggestElement)) {
          detectedBiggestElement = element;
        }

        if (this.comparator.lessThan(element, detectedSmallestElement)) {
          detectedSmallestElement = element;
        }
      });
    }

    const buckets = Array(
      detectedBiggestElement - detectedSmallestElement + 1,
    ).fill(0);

    originalArray.forEach(element => {
      this.callbacks.visitingCallback(element);

      buckets[element - detectedSmallestElement] += 1;
    });

    for (let bucketIndex = 1; bucketIndex < buckets.length; bucketIndex += 1) {
      buckets[bucketIndex] += buckets[bucketIndex - 1];
    }
    buckets.pop();
    buckets.unshift(0);

    const sortedArray = Array(originalArray.length).fill(null);
    for (
      let elementIndex = 0;
      elementIndex < originalArray.length;
      elementIndex += 1
    ) {
      const element = originalArray[elementIndex];
      this.callbacks.visitingCallback(element);
      const elementSortedPosition = buckets[element - detectedSmallestElement];
      sortedArray[elementSortedPosition] = element;
      buckets[element - detectedSmallestElement] += 1;
    }
    return sortedArray;
  }
}
