const cities = ['Athens', 'London', 'Paris']

//  1
for (let i = 0; i < cities.length; i++){
    console.log(cities[i])
}

//  2
for (let city of cities){
    console.log(city)
}

// 3
cities.forEach(function(city) {
    console.log(city)
})

// 4
cities.forEach((city) => console.log(city))