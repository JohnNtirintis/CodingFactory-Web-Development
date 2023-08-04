// customer Object
const customer = {
    name:"J. Papa",
    age:32,
    height:1.82
};

const emptyOjb = {}

const point = {x : 1, y : 2}
const point2 = {x: point.x, y : point.y}

// Using new keyword

const point3D = new Object();
point3D.x = 1;
point3D.y = 2;
point3D.z = 3;

point3D.x = 14;

console.log(point3D.x)

for (let info in customer){
    console.log(`${info}: ${customer[info]}`)
}

const stocks = {APPLE: "APPL", Microsoft:"MSFT", Google:"GOOG"}
const portfolio = {APPL:10, MSFT: 0, GOOG: 2}

function addStock(portfolio, stock, shares){
    portfolio[stock] += shares;
}

addStock(portfolio, stocks.Microsoft, 15);

const book = {author: {firstname: "George", surname: "Orwell"}, title:1984}

for(let info in book.author){
    console.log(`${info}: ${book.author[info]}`)
}

for (let [k,v] of Object.entries(book)){
    console.log(`${k}: ${v}`)
}