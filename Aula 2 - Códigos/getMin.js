function getMin(array) {
  let min
  for (let index = 0; index < array.length; index++) {
    const element = array[index]  
    if (min === undefined || element < min)  {
      min = element  				
		}
  }
  return min
}

console.log(getMin([6,3,7,3,1,8,5]))
