/*Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/
var reverseString = function(s) {
    let temp ;
    let l = s.length-1;
    
    for ( let i= 0 ,j= l; i<l ; i++){
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;  
        j--;
    }
};
// or more simple :
var reverseString = function(s) {
    s.reverse();
};