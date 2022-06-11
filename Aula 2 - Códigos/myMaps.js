const myMap = new Map()

myMap.set('Jessie', {phone: '839-383.5576', adress: '124 1st Avenue'})
console.log(myMap.has('Jessie'))
console.log(myMap.get('Jessie'))
console.log(myMap.size)
  
for (const [key, value] of myMap){
  console.log(key + ' = ' + value)
}

for (const key of myMap.keys()){
  console.log(key)
}