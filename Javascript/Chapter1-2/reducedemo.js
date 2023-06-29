const nums = [1,2,3,4,5,5,6,6,67,7,8,9]

let sum = nums.reduce((total, val) => total + val, 0)
console.log('Sum = ', sum)

let avg = nums.reduce((total, val, _, {length}) => total + (val / length), 0)
console.log("Average: ", avg)