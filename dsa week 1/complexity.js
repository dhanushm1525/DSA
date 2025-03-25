function constantTime(arr) {
    return arr[0]; // O(1)
}

function linearTime(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); // O(N)
    }
}

function quadraticTime(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]); // O(N²)
        }
    }
}

let arr = [1, 2, 3, 4, 5];
console.log("O(1):", linearTime(arr));
// 
