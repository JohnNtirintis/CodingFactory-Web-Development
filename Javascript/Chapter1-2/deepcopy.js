const user = [
            {id: 1, firstName: "John", lastName: "Capone", Country: "IRE", wdc: {2020 : 0}},
            {id: 2, firstName: "Daniel", lastName: "Ricciardo", Country: "AU",  wdc: { 2018: 0,2020 : 0}},
            {id: 3, firstName: "Fernando", lastName: "Alonso", Country: "SP",  wdc: {2005 : 1, 2006: 1}},
            {id: 4, firstName: "Mick", lastName: "Schumacher", Country: "GER",wdc: {20021 : 0, 2022: 0}},
]

const deepCopy = _.cloneDeep(user)
console.log(deepCopy)

// user.forEach(element => {
//     console.log(element)
// })