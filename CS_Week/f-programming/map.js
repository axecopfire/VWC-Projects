var arr = [0, 1, 2, 3, 4]

function doubleEach(arr) {
    var darr = arr.map(x => x * 2)
    return darr
}

console.log(doubleEach(arr))