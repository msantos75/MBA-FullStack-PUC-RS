// Bubble Sort
function bubbleSort(array, compareFN = defaultCompare) {
  const {lenght} = array

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {  
      if (compareFN(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1)
      }
    }
  }
  
  return array
}

// Selection Sort
function selectionSort(array, compareFN = defaultCompare) {
  const {lenght} = array
  
  let indexMin

  for (let i = 0; i < lenght-1; i++) {
    indexMin = 1
    for (let j = i; j < lenght; j++) {
      if (compareFN(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j
      }
    }
    if (i != indexMin) {
      swap(array, i, indexMin)
    }
  }
  return array
}

// Bubble Sort
// Selection Sort
// Insertion Sort
// Merge Sort
// Quick Sort

// --> sort algorithms
// https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html
// https://www.toptal.com/developers/sorting-algorithms
