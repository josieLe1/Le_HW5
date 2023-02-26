const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const oddNum = array.filter(x => x%2 !== 0)

const array1 = array.filter(x => (x%2 === 0) || (x%5 === 0))

const array2 = array.filter(x => x%3 === 0)
const array3 = array2.map(x => x*x)

const array4 = array.filter(x => x%5 === 0)
const array5 = array4.map(x => x*x)
const array6 = array5.reduce((acc, value) => acc + value, 0)

console.log(oddNum)
console.log(array1)
console.log(array2)
console.log(array3)
console.log(array6)

