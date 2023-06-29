const products = [
    { name: "Milk", price: 4},
    { name: "Honey", price: 7},
    { name: "Oranges", price: 11},
    { name: "Oranges", price: 12},
    { name: "Honey", price: 7},
    { name: "Apples", price: 5}]

products.sort(function(a,b ) {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    if( a.name === b.name) {
        if(a.price > b.price) return 1
        if(a.price < b.price) return -1
        return 0
    }
})

console.log(products)
