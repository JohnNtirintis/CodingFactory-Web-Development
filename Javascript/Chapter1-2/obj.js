const driver = {
    id: 1,
    firstName: "Daniel",
    lastName: "Ricciardo"
}

const bob = new Object()
bob.id = 2
bob.firstName = "Bob"
bob.lastName = "The Builder"

const complexObj = {
    id: 3,
    firstNmae: driver.firstName,
    address: {street: "Monza", number: "8"}
}

// console.log(complexObj) 
// console.log(complexObj.address)

let pivot = driver.id
// console.log(driver.id)
console.log(driver[pivot])

for (item in driver){
    console.log(`${item}, ${driver[item]}`)
}

for (const [key, value] of Object.entries(driver)) {
    console.log(`${key} : ${value}`)
}

let [c, d] = [1,2 ]

console.log(c)
console.log(d)