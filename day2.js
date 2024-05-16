/*
*    Day 2: Shuffle the Array
*    Given the array nums consisting of 2n elements in the
*    form [x1,x2,...,xn,y1,y2,...,yn].
*    Return the array in the form [x1,y1,x2,y2,...,xn,yn].
*/

function shuffle(arr){
    const N = arr.length;
    const firstPart = [];
    const secondPart = [];

    // Divide the array into two parts
    for (let i = 0; i < N; i++) {
        if (i < N / 2) {
            firstPart.push(arr[i]);
        } else {
            secondPart.push(arr[i]);
        }
    }

    // Shuffle the array
    const mixedArray = [];
    let j = 0, k = 0;
    for (let i = 0; i < N; i++) {
        if (i % 2 === 0) {
            mixedArray.push(firstPart[j++]);
        } else {
            mixedArray.push(secondPart[k++]);
        }
    }
    return mixedArray;
}

console.log(shuffle([2, 5, 1, 3]));