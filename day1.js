/* Concatenation of Array
*    Given an integer array nums of length n, you want to
*    create an array ans of length 2n where ans[i] == nums[i]
*    and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
*    Specifically, ans is the concatenation of two nums arrays.
*    Return the array ans 
*/

// Built-in solution
const num = [0, 1, 2, 3, 4];
const ans = num + "," + num;

console.log(ans);

// More Low level solution
const arr = [0, 1, 2, 3, 4];
const N = arr.length;
let newArr = [];

for(i = 0 ; i < N * 2 ; i++){
    if(i < N){
        newArr[i] = arr[i];
    }else{
        newArr[i] = arr[i-N];
    }
}

console.log(newArr);