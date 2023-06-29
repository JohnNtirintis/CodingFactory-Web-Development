const stocks = {Apple: "AAPL", Microsoft: "MSFT", Google: "ALPHA"}

const portfolio = {AAPL: 10, MSFT: 0, ALPHA: 24}

function addStock(portfolio, stock, shares){
    portfolio[stock] += shares

}

addStock(portfolio, stocks.Microsoft, 20)
addStock(portfolio, stocks.Apple, 14)

console.log(portfolio)