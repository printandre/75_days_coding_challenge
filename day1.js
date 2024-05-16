/* 
*    Day 1: Concatenation of Array
*    Given an integer array nums of length n, you want to
*    create an array newArr of length 2n where newArr[i] == nums[i]
*    and newArr[i + n] == nums[i] for 0 <= i < n (0-indexed).
*    Specifically, newArr is the concatenation of two nums arrays.
*    Return the array newArr 
*/

function concat(arr){
    const N = arr.length;
    let newArr = [];

    for(i = 0 ; i < N * 2 ; i++){
        if(i < N){
            newArr[i] = arr[i];
        }else{
            newArr[i] = arr[i-N];
        }
    }
    return newArr;
}