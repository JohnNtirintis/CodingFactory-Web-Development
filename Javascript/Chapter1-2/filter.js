const products = ['Apples', 'Oranges', 'Milk', 'Honey']

const filtered = products.filter(product => product === "Apples")

// console.log(filtered)

const mappedProducts = products.map(product => "Product: " + product)

console.log(mappedProducts)