## Longest Substring Without Repeating Characters

Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = '';
    let subStr = '';
    if(s.length <= 1 || new Set(s).size === s.length) {
      return s.length;   
    }
    
    for(let i = 0; i < s.length - 1;i++) {
        for(let j = i + 1; j <= s.length;j++) {
            subStr = s.substring(i, j);   
            longest = subStr.length > longest.length ? subStr : longest;            
           if(subStr.includes(s[j])) {               
               break;
           }
            
        }
    }
    return longest.length;    
};
```
