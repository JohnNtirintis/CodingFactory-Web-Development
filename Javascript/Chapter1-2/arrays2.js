let arr = []
let arr2 = [1, 2, 3]

let arr3 = new Array(4) // create an array with 4 undefined elements
let arr4 = new Array(1, 2, 3) // 3 elements

let clone = [...arr2] // Shallow Copy
let extended = [...arr, 8, 9]

let arr5 = Array.of(5)
let arr6 = Array.from(arr3)

for (let i = 0; i < arr.length; i++){

}

for (const item of arr3){

}

arr2.forEach(item => console.log(item))

let cities = ['Athens', 'Paris']
cities.push('Constantinople')
cities.unshift("Champagne")
cities.pop()
let city = cities.pop()

// cities.forEach(item => console.log(item))

// console.log(city)

// splice: remove, insert, update

let nums = [1,2 ,3, 4, 5, 6, 7,8]
nums.splice(0,4) // star index, number of elements to be deleted


let prices = [1,2,3,4,5]
prices.splice(1,0,"hello") // at index 1 (pos 2), delete 0 elements, and add string "hello"

prices.splice(3,1,30) // at index 3 (pos 4), delete 1 element, and add string num 30

let sliced = prices.slice(0,2)
let myArr = new Array(5) // undefined
myArr.fill(24)

let testArr = [1,2,3,4,5]
testArr.copyWithin(1,3)

console.log(testArr)

