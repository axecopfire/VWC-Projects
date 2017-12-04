arr = [9, 1, 2, 7, 6, 4, 15, 123, 13]

function insertionSort(items) {
    for (var i = 0; i < items.length; i++) {
        var temp = items[i];
        while (i > 0 && items[i - 1] > temp) {
            items[i] = items[i - 1];
            i--;
        }
        items[i] = temp;
    }
    return items;
}

console.log(insertionSort(arr));