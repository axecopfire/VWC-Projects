var arr = [0, 1, 2, 3, 4]

function doubleEach(arr) {
    var darr = arr.map(x => x * 2)
    return darr
}

function squareEach(arr) {
    var sqarr = arr.map(x => x * x)
    return sqarr
}

console.log(squareEach(arr))