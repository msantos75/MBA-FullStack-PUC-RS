// funcão fatorial não recursiva
function fatorial(number) {
  if(number < 0) return undefined

  let total = 1
  for(let n = number; n > 1; n--) {
    total = total * n
  }

  return total
}

// função fatorial recursiva
function fatorialRecursivo(number) {
  if(number < 0) return undefined
  
  if(number === 0 || number === 1) return 1

  return number * fatorialRecursivo(number - 1)
}

//

var numFatorial = 5

console.log('Fatorial de', numFatorial, 'não recursivo:', fatorial(numFatorial))
console.log('Fatorial de', numFatorial, 'recursivo:', fatorialRecursivo(numFatorial))