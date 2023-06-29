console.log(add(1,2,3,4,24))
console.log(add(1,2))

// The rest parameter (...) 
// allows a function to treat an indefinite number of arguments as an array
function add(...nums){
    let total = 0;
    // const means read only in this case
    for(const num of nums){
        total += num;
    }
    return total;
}