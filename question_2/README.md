Task : Given a string as an argument, write a function that returns the first recurring character in the string or null if there is no
recurring character. For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

Approach : This function uses a JavaScript object, charMap, to keep track of the characters that have been seen so far in the string.
It iterates through each character in the string using a for-of loop.
It checks if the current character is already in the charMap object, if it is, then it returns that character because it is the first recurring character.
Otherwise, it adds the current character to the charMap object and continues iterating.
If the loop completes without finding any recurring characters, the function returns null.

Time complexity of O(n) 
