// arrays

var arr1 = [2, 4, 6, 8, 10, 12]

// for (let i = 0 ; i < arr1.length; i++) {
//   console.log(arr1[i])
// }
console.group('forEach')
arr1.forEach((val, index) => console.log(index, val))
console.groupEnd

console.group("for in, for of")
for (index in arr1) {
  console.log(index)
}
for (value of arr1) {
  console.log(value)
}
console.groupEnd

var arrMap = arr1.map(val => val * 2)

console.group("Map")
console.log(arrMap)
console.groupEnd()

console.group("Filter")
var arrFilter = arr1.filter(val => val > 7)
console.log(arrFilter)
console.groupEnd()

console.group("every")
var arrEvery = arr1.every(val => val > 0)
console.log(arrEvery)
console.groupEnd()

console.group("some")
var arrSome = arr1.some(val => val > 13)
console.log(arrSome)
console.groupEnd()

// function sum(a, b) {
//   console.log(arguments)
//   var sum = 0
//   for (let i = 0; i< arguments.length; i++){
//     sum += arguments[i]
//   }
//   return sum
// }

// console.log(sum(2, 3, 5, 7))

function sum2(...args){
  console.log(args.reduce((a, b) => a + b, 0))
}

sum2(1, 3, 5, 7, 9)

let sum  = (...args) => args.reduce((a, b) => a + b, 0)

console.group('Sum')
console.log(sum()) // 0
console.log(sum(1)) // 1
console.log(sum(2, 4))  // 6
console.log(sum(3, 7, 9))  //  19
console.log(sum(...[2, 4, 8]))  //14
console.groupEnd()