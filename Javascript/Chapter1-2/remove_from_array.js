const remove = function(arr, val) {
    if (!arr || !val) return

    let pivot = arr.indexOf(val)
    arr.splice(pivot, 1)
}

const arr = [1,2,3,4]
remove(arr,2)
console.log(arr)
