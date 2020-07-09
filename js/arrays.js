// arrays

var arr1 = [2, 4, 6, 8, 10, 12]

// for (let i = 0 ; i < arr1.length; i++) {
//   console.log(arr1[i])
// }
console.group('forEach')
arr1.forEach((val, index) => console.log(index, val))
console.groupEnd
