// Busca linear/sequencial - Usar para lista desordenadas
const DOES_NOT_EXIST = -1

function sequentialSearch(array, value, equalsFn = defautlEquals) {
  for (i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i
    }
  }
  return DOES_NOT_EXIST
}

const any = [1,2,3,4,5,6]
console.log(sequentialSearch(any, 3))


// Busca binária - Usar para listas ordenadas
function binarySearch(array, value, compareFn = defatultCompare) {
  const sortedArray = quickSort(array)  // ordenar a lista

  let low = 0
  let high = array.length-1

  while (lesserOrEquals(low, high, compareFn)) {
    const mid = Math.floor((low + high) / 2)
    const element = sortedArray[mid]

    if(compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1
    } else if(compareFn(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1
    } else {
      return mid
    }    
  }
  return DOES_NOT_EXIST
}
