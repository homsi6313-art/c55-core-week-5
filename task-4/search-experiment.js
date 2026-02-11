import generateBigArray from "./bigArray.js";

// Linear Search
// -------------------------
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
// Binary Search
// -------------------------
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Generate Arrays (NOT timed)
// -------------------------
const array1K = generateBigArray(1000);
const array100K = generateBigArray(100000);
const array10M = generateBigArray(10000000);

const target = 123456789; // A number that is not in the arrays to test worst-case scenario

// Linear Search Tests
// -------------------------
console.time("Linear Search 1K");
linearSearch(array1K, target);
console.timeEnd("Linear Search 1K");

console.time("Linear Search 100K");
linearSearch(array100K, target);
console.timeEnd("Linear Search 100K");

console.time("Linear Search 10M");
linearSearch(array10M, target);
console.timeEnd("Linear Search 10M");

console.log("----------------------------");

// Binary Search Tests
// -------------------------
console.time("Binary Search 1K");
binarySearch(array1K, target);
console.timeEnd("Binary Search 1K");

console.time("Binary Search 100K");
binarySearch(array100K, target);
console.timeEnd("Binary Search 100K");

console.time("Binary Search 10M");
binarySearch(array10M, target);
console.timeEnd("Binary Search 10M");
// Reflection:
// Binary Search was much faster than Linear Search,
// especially for large arrays because it has O(log n)
// complexity compared to O(n).
