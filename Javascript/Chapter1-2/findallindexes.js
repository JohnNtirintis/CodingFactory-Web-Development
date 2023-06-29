myArr = [24, 1,2,3,24,24,5,24]

console.log(findAll(myArr, 24))

function findAll(arr, x) {
    if (!arr || !x) return []

    let results = []
    let len = arr.length
    let pos = 0

    while(pos < len){
        pos = arr.indexOf(x, pos)
        if( pos === -1) break
        results.push(pos++)
    }

    return results
}