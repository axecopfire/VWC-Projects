var input = ['sam', 'ed', 'harry'];
var num = 0;

function printArr(arr, num) {
    if (num < arr.length) {
        console.log(arr[num]);
        return (printArr(arr, num + 1));
    }
}

printArr(input, num);