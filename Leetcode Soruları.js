/* Soru1
In a list of songs, the i-th song has a duration of time[i] seconds. 

Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.
*/
var numPairsDivisibleBy60 = function(time) {
    let count = 0;
    
    for (let i = 0; i < time.length; i++) {
      for (let j = i + 1; j < time.length; j++) {
        if ((time[i] + time[j]) % 60 === 0) count++;
      }
    }
    
    return count;
  };


/* Soru2
Given a word, you need to judge whether the usage of capitals in it is right or not.
We define the usage of capitals in a word to be right when one of the following cases holds:

1.All letters in this word are capitals, like "USA".
2.All letters in this word are not capitals, like "leetcode".
3.Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
*/
var detectCapitalUse = function(word) {
    if(word.toUpperCase() === word){
        return true;
    }
    
    if(word.toLowerCase() === word){
        return true;
    }
    
    if(word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase() === word){
        return true;
    }
    
    return false;
};

/* Soru3
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1.  Open brackets must be closed by the same type of brackets.
1.  Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/
var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};


 

 