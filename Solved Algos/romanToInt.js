//Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// UNDERSTAND THE PROBLEM

// 1. Can i restate the problem in my own words
//"roman to integer"
// 2. What are the inputs and outputs going into the problem?

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 3. Do i have enough info about problem? ask it, make questionos about it

// CONCRETE EXAMPLES

// 1. Start with simple example
// romanToInt("XV") // 15
// romanToInt("XIV") // 14

// 2. Progress to more complex examples
// romanToInt("CD") // 400
// romanToInt("CM") // 900
// romanToInt("XC") // 90

// 3. Are empty string included? What is result

// 4. Handle errors, what can be input?
// no erorrs, we know exactly what will be input

//  BREAK IT DOWN
function romanToInt(str) {
  //loop over the string
  const arr = [],  resArr = [];
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  for (let char of str) {
    // replace string with value
    arr.push(romanNumerals[char]);
  }
  // check out positioning of number and add it to the new array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      if (arr[i] === 1 || 10 || 100) {
        resArr.push(arr[i + 1] - arr[i]);
        arr.splice(i, 1);
      }
    } else {
      resArr.push(arr[i]);
    }
  }
  return resArr.reduce((acc, el) => acc + el, 0);
}
const result = romanToInt("XIII");
console.log(result);
