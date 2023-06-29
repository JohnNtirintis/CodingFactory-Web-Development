console.log(factorial(5))

function factorial(n){
    let result = 1;
    // While n > 0
    while(n){
        result *= n;
        n--;
    }
    return result;
}