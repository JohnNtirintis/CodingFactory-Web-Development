const products = ['Apples', 'Oranges', 'Milk', 'Honey']

let startsWithA = products.some(p => p.startsWith('A'))

if(startsWithA){
    console.log("Starts with a 'A' ")
} else {
    console.log('Doesnt start with A')
}

let areAllValidProducts = products.every(p => p.length >= 2)

if(areAllValidProducts){
    console.log("All are valid")
}