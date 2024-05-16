/*
* Day 3: Number of Good Pairs
* Given an array of integers nums, return the number of
* good pairs.
* A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/

function goodPairs(arr) {
    // number of good pairs counter
    let count = 0;

    for(let i = 0; i < arr.length; i++){ // for each element in the array
        for(let j = i + 1; j < arr.length; j++){ // look the next elements
            if(arr[i] === arr[j] && i < j){ // if there's an element which forms a good pair
                count++; // increase the counter
            }
        }
    }
    return count;
}