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

//const isValid = function(strParantheses) {
// define endpoints

// using object as Stack DS

// adding a checkpoiont

// maybe we should use helper design pattern

// for each subexpresiion check it and decide whether we should remove it or not

// return value;
//};

var isValid = function (s) {
  // if string is null or length is 0 return true
  if (s === null || s.length <= 0) return true;
  // split string into array
  var cArr = s.split(""); 
  // define stack
  var stack = [];
  // loop over array, and add desired values into stack
  for (var c of cArr) {
    console.log(stack.pop());
    // if we encounter openening bracket , we push closing bracket into stack
    if (c === "[") stack.push("]");
    else if (c === "{") stack.push("}");
    else if (c === "(") stack.push(")");
    // if we dont encounter openeing brackets we check wheter length is 0 or if current element is not equal to last element  in stack
    // we can do that because of definitons of problem | input: "[)]" false
    else if (stack.length === 0 || c !== stack.pop()) return false;
  }
  // if eeverything popped the length is 0 and we return true;
  if (stack.length === 0) return true;
  // if it's not 0 we return false;
  return false;
};

// var isValid = function(s) {
  
  //     let closeMap = {
    //         ')' : '(',
    //         '}' : '{',
    //         ']' : '['
    //     };
    //     let charStack = [];
    
    //     //validate input
    //     if(s===null || s===undefined)
    //         return false;
    
    //     for(var i = 0; i<s.length; i++){
      //         let curChar = s.charAt(i);
      //         let topElement;
      //         if(closeMap[curChar] !== undefined){
        //             topElement = (charStack.length===0) ? '#' : charStack.pop();
        //             if(topElement !== closeMap[curChar])
        //                return false; 
        //         }else{
          //             charStack.push(curChar);
          //         }
          //     }
          //     return charStack.length === 0;
// }; 

const result = isValid("{[[{}]]}()()");
console.log(result);

