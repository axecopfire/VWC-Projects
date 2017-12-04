/*Reverse A String

Write a function called reverseString that will take a string and return the string reversed.

Input: 'abcd'

Output: 'dcba’

Hint: Start by creating an empty string. Then using a loop in reverse order to concat a new string.*/

var input = 'abcd';
var num = 0;

function numLen(str, num) {
    if (num < str.length) {
        return numLen(str, num + 1);
    }
    return num
}

function revStr(str, num) {

}


numLen(input, num);

/*
input a string
capture the length of the string in a variable
at that position capture the character and return a new string
subtract 1 from the length variable
repeat steps 2 through 4
then output new string*/