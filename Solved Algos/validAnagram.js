// Length of last word
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//1.Restate the problem in my own word
//"return true if there are same characteres in both parameters, order doesnt matter"
//2. Inputs are always going to be strings, there will be no spaces,
//3. outputs either lenght of last word or 0 if its not valid;

//1. simple examples
// Input: s = "anagram", t = "nagaram" returns true

//2. complex examples
// Input: s = "rat", t = "car" returns false

//3. invalid inputs and empty inputs
// there will be no such cases but if there are , return false

// frequency pattern should be used
const isAnagram = function (s, t) {
  
  let arr =  Array(s, t)
  //if invalid or empty Inputs return false
  if (s.length === 0 || t.length === 0) return false;
  
  // check and extract only alphanumeric exlucing spaces
  arr.forEach((el) => el.replace(/[^0-9A-Z]+/gi, ""));
  
  // get new values
  let [s1, t1] = arr;

  // check if they are same length
  if(s1.length !== t1.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for(let val of s1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of t1){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  
  for(let key in frequencyCounter1){
    if(!(key in frequencyCounter2)){
      return false;
    }

    if(frequencyCounter2[key] !== frequencyCounter1[key]){
      return false;
    }
  }
  return true;

};

console.log(isAnagram("scccac", "scccca"));
