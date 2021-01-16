## Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true


Example 2:
Input: s = "()[]{}"
Output: true


Example 3:
Input: s = "(]"
Output: false


Example 4:
Input: s = "([)]"
Output: false


Example 5:
Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

```
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
//Using stack
    let stack = [];
    let obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
        
   for(let i = 0; i<s.length;i++) {
        if(Object.keys(obj).includes(s[i])) {
           stack.push(s[i]);
         } else if(obj[stack.pop()] !== s[i]) {
           return false;
        }       
    }
    return !stack.length;
    
    //another approach
    // let str;
    // while(s.length && s.length % 2 == 0) {
    //     str = s.replace('()', '').replace('{}', '').replace('[]', '');       
    //     if(str.length == s.length) {
    //         return false;
    //     }
    //     s = str;
    // }
    // return !s.length;
    
};
```
