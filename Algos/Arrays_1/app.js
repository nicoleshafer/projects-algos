
//Push Front
var arr = [5, 7, 2, 3]
function pushFront(arr, val) {
    for (var i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1]
    }

    arr[0] = val
    return arr
}
console.log(pushFront(arr, 8))





//Pop Front
var arr = [0, 5, 10, 15]

function popFront(arr) {
    let firstNum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.pop()
    console.log(arr)
    return firstNum
}
console.log(popFront([0, 5, 10, 15]))



//Insert At
let arr = [100, 200, 5]
function insertAt(arr, index, value) {
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1]
    }
    arr[index] = value
    return arr
}
console.log(insertAt([100, 200, 5], 2, 311))





