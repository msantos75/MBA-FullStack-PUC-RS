var mySet = new Set()

mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add('texto')
var estrutura = {a: 1, b: 2}
mySet.add(estrutura)

for (let item of mySet) 
  console.log(item)

