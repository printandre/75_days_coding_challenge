/* 
*     Day 1: Concatenation of Array
*    Given an integer array nums of length n, you want to
*    create an array ans of length 2n where ans[i] == nums[i]
*    and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
*    Specifically, ans is the concatenation of two nums arrays.
*    Return the array ans 
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