function add(a , b){
    tmp = a
    a = b
    b = tmp
    return a,b
}

const add1 = function(a, b){
    return a + b
}

const add2 = (a, b) => a + b

console.log(add2(1,4))  