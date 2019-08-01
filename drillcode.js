/* eslint-disable semi */
/* eslint-disable strict */
'disable eslint';
const { LinkedList, _Node } = require('./LinkedList');

function qSort(arr, start = 0, end = arr.length) {
  if (start >= end) {
    return arr;
  }
  const middle = partition(arr, start, end);
  arr = qSort(arr, start, middle);
  arr = qSort(arr, middle + 1, end);
  return arr;
}

function partition(arr, start, end) {
  const pivot = arr[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end - 1, j);
  return j;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function mSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle, arr.length);

  leftArr = mSort(leftArr);
  rightArr = mSort(rightArr);
  return merge(leftArr, rightArr, arr);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

/* 5. Sorting a linked list using merge sort */
function mergeSortLL(list) {
  // check if list is empty
  // console.log(list.size())
  if (list.size() <= 1) {
    return list;
  }

  let left = new LinkedList();
  let right = new LinkedList();

  let leftCurrNode = null; // 
  for (let i = 0; i < Math.floor(list.size() / 2); i++) {
    if (i === 0) {
      leftCurrNode = list.head;
    }
    left.insertLast(leftCurrNode.value);
    leftCurrNode = leftCurrNode.next;
  }

  let rightCurrNode = null;
  for ( let i = Math.floor(list.size() / 2) + 1; i < list.size(); i++ ) {
    if (i === Math.floor(list.size() / 2) + 1) {
      rightCurrNode = leftCurrNode
    }
    right.insertLast(rightCurrNode.value);
    rightCurrNode = rightCurrNode.next;
  }

  return mergeLL(mergeSortLL(left), mergeSortLL(right)); 
}

function mergeLL(left, right) {
  let newLL = new LinkedList();
  let resultPtr = newLL.head;
  let leftPtr = left.head;
  let rightPtr = right.head;

  while (leftPtr && rightPtr) {
    let tempNode = null;
    if (leftPtr.value > rightPtr.value) {
      tempNode = rightPtr.value
      rightPtr = rightPtr.next;
    } else {
      tempNode = leftPtr.value;
      leftPtr = leftPtr.next;
    }
    
    if (!newLL.head ) {
      newLL.head = new _Node(tempNode, null) // value, next???
      resultPtr = newLL.head;
    } else {
      resultPtr.next = new _Node(tempNode, null);
      resultPtr = newLL.head;
    }  
  }
  resultPtr.next = leftPtr;
  while (resultPtr.next) {
    resultPtr = resultPtr.next;
    resultPtr.next = rightPtr;
  }
  return newLL;
}

function main() {
  const dataString =
    '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
  const dataset = dataString.split(' ').map(element => parseInt(element));
  // console.log(qSort(dataset));
  // console.log(mSort(dataset));
  
  const LL = new LinkedList();
  for (let i = 0; i < dataset.length; i++) {
    LL.insertLast(dataset[i]);
  }

  // LL.printAll();
  // console.log(LL.size());
  let newSortedList = mergeSortLL(LL);
  newSortedList.printAll();

  // console.log('right: ', mergeSortLL(LL).right);
}
main();
