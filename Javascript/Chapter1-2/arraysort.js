// array that contains objects
const products = [{id: 1, productName: "Apples", price: 10.6},
                  {id: 2, productName: "Oranges", price: 12.1},
                  {id: 3, productName: "Milk", price: 2.4}
                ]



// products.forEach(element => {
//     console.log(products[element["id"]])
// });

products.sort(function(a,b) {
    if(a.productName > b.productName) return 1
    if(a.productName < b.productName) return -1
    if(a.productName === b.productName) {
        if(a.price > b.price) return 1
        if(a.price < b.price) return -1
        return 0
    }
})

products.forEach(element => {
    console.log(element)
})