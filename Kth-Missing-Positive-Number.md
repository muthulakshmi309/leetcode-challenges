Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array.

 
## Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
 

## Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length

## Solution
```
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missingArr = [];
    let missingValue;
    if(arr[0] > 1) {
       for(let i = 1; i<arr[0];i++) {
            missingValue = insertAndVerify(i);
            if(missingValue) {
                 return missingValue;
            }
       }
    } 
            
    for(let i=1;i<arr.length;i++) {
        if(arr[i] - arr[i-1] !== 1) {
           for(let j = arr[i-1] + 1; j<arr[i];j++) {
               missingValue = insertAndVerify(j);
                if(missingValue) {
                     return missingValue;
                }
           }
        }
    }
    
    function insertAndVerify(val) {
       missingArr.push(val);
       if(missingArr.length >= k) {
          return missingArr[k-1];
       }       
    }
    
    if(missingArr.length == 0) {
       return arr[arr.length - 1] + k;
    } else {
        return missingArr[missingArr.length - 1] + (k - missingArr.length + (arr[arr.length - 1] - missingArr[missingArr.length - 1]));
    }
           
};
```
