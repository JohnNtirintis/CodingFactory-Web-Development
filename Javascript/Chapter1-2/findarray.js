let products = ['Apples', 'Milk', 'Bread']

let product = products.find(prod => prod.length <= 4)

if(product) {
    console.log(product)
}

let productIndex = products.findIndex(pro => pro === "Milk")

console.log(productIndex)

if(productIndex !== -1){
    products.splice(productIndex, 1)
}

products.forEach(element => console.log(element))