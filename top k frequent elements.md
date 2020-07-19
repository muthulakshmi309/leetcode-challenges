#### Top K Frequent Elements

Given a non-empty array of integers, return the k most frequent elements.

##### Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

##### Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.

#### Solution
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashMap = new Map();
    nums.forEach((val, ind) => {  
        hashMap.has(val) ? hashMap.set(val, hashMap.get(val) + 1) : hashMap.set(val, 1);                      
    });   
    
    let countArr = [...hashMap.values()];    
    countArr = countArr.sort((a,b) => b -a);
    let output = [];
   
    for(let i = 0;i < k; i++) {
        for(let [key,v] of hashMap.entries()) {          
            if(countArr[i] == v) {
                hashMap.delete(key);
                output.push(key);
                break;
            }
        };         
    }
    return output;
};
```
