//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// VALID PARENTHESES
// paranhses of the same type need to be closed for porgoram to return true no matter what is inside it or how many of them are there,

// quick check in recursion
/*
const factorial = function(num) {
  if(num === 1) return 1;
  return num * factorial(num - 1);
}

function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}
--OTHER 
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
                                                                        
      
            
collectOddValues([1,2,3,4,5,6,7,8,9])
*/

// inputs always parenhses
// outputs true or false

// simple example
// Input: "()" Output: true
// Input: "()[]{}" true;

// complex example
// input: "(]" false;
// input: "[)]" false
// input: "{[]}" true;

// no empty string nor other characters, whitespaces
// we will be using recursion

// const isValid = function(strParantheses) {
// using object as Stack DS

// adding a checkpoiont

// maybe we should use helper design pattern

// for each subexpresiion check it and decide whether we should remove it or not

// return value;
// };

// const result = isValid("[]")
// console.log(result)

// const power = function(base, exponent){
//   if(exponent === 1) return base;
//   // return base
//   return base * power(base, exponent-1);
// }

// const result = power(5, 2)
// console.log(result);

// const factiorial = function(num){
//   if(num === 1) return 1;
//   //return base
//   return num * factiorial(num-1);
// }

// const result = factiorial(5)
// console.log(result);
// const productOfArray = function(arr){
//   if(arr.length === 0) return 1;
//   return arr[0] * productOfArray(arr.slice(1))
// }

// const result = productOfArray([1, 2, 3, -5])
// console.log(result);

// const recursiveRange = function(first, last){
//   const arr = [];

//   function helper(first, last){
//     if(first === last) return;
//     arr.push(first);

//     helper(first + 1, last);
//   }

//   helper(first + 1, last)

//   return arr;
// }

// const result = recursiveRange(1, 4)
// console.log(result);

// const fib = function (num) {

// };
// function recursiveRange(x){
//   if (x === 0 ) return 0;
//   return x + recursiveRange(x-1);
// }

// const result = recursiveRange(5);
// console.log(reresults)

// const result = fib();
// console.log(result);
// function fib(n) {
//   if (n < 2){
//     return n
//   }
//   return fib(n - 1) + fib (n - 2)
// }

// const result = fib(5);
// console.log(result);
// ---------------REVERSE
//

// reversed string
// input: "str" return "rts"
// input: "" return ""
// input: "hello" return "olleh"
//

// const reverse = function(str){
//   return str.split('').reverse().join('');
// }

// const reverse = function (str) {
//   const arr = str.split("");
//   let resultArr = [];

//   function helper(arr) {
//     if(arr.length === 0) return;
//     resultArr.push(arr[arr.length - 1]);
//     arr.pop();

//     helper(arr);
//   }
//   helper(arr)
//   return resultArr.join('')


// };
// function reverse(str){
// 	if(str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0];
// }
// // reverse('hello')
// //   reverse('ello') + 'h'
// //     reverse('llo') + 'e'
// //       reverse('lo') + 'l'
// //         reverse('o') + 'l'
// //           reverse('') + 'o' 
  
// const result = reverse('hello');
// console.log(result);


// "reversed true"
// simple inputs
// "sad" return false
// "sas" return true

// remove punctuation, no symbols and no spaces

// "3a3" return true
// "asa" retrun true

// palindrome(“1 eye for of 1 eye.”) should return false
// palindrome(“0_0 (: /-\ :) 0–0”) should return true

// const palindrome = function(str){

//   //remove all punctuation, spaces, and sybmols
//   let pal1 = str.replace(/[^0-9a-z]/gi, '').trim().toLowerCase();
//   let pal2 = pal1.split('').reverse().join('');
//   return pal1 === pal2;
//   //return value
// }
// function isPalindrome(str){
//   if(str.length === 1) return true;
//   if(str.length === 2) return str[0] === str[1];
//   if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//   return false;
// }

// console.log(palindrome('racar'))


