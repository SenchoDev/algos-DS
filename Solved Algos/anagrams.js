// ANAGRAMS --USING FREQENCY PATTERN FOR LESS TIME COMPLEXITY IN CODE
// Given two strings, write a fucntion to dertermine if the second string is an anagram of ther first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another ,such as cinema, formed by iceman;

//1.Restate the problem in my own word
//"check characters in string"
// we have two strings where we need to see exsistance of  characters(str1) in other str2;
// order doesn't matter but if there is  1 character in str1, other str2 needs to have 1 character 
//2. Inputs are always goingto be alphabetic strings, without spaces, numbers and so on.
//3. outputs either true or false;

//1. simple examples
// validAnagram("aaz", "zza") returns false
// validAnagram("awesome", "awesom") returns false;

//2. complex examples
// validAnagram("testwith", "withtest") returns true;
// validAnagram("asasa", "sasaa") returns true;

//3. invalid inputs and empty inputs
// validAnagram("", "") returns true
// validAnagram("234", "ad323") returns false;

function validAnagram(str1, str2){
  // check if the string are the same lenght
  if(str1.length !== str2.length){
    return false
  }
  //declare two objects, i figure it out to use frequency pattern where O(n2) is reduced to O(n); REDUCING NESTED FOR LOOPS
  let frequencyCoutner1 = {};
  let frequencyCoutner2 = {};
  //do for loop and store data
  for (let char of str1){
    frequencyCoutner1[char] = (frequencyCoutner1[char] || 0 ) + 1
  }
  for(let char of str2){
    frequencyCoutner2[char] = (frequencyCoutner2[char] || 0 ) + 1
  }
  
  for(let key in frequencyCoutner1){
     if(!(key in frequencyCoutner2)){
       return false
     }
     if(frequencyCoutner2[key] !==  frequencyCoutner1[key]){
       return false;
     }
     return true;
     
  }
  //return value
  console.log(frequencyCoutner1);
  console.log(frequencyCoutner2);

}
const result = validAnagram('anagram', 'gramana');
console.log(result)

//------------------------OTHER SOLUION----------------------


// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

// // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagrams', 'nagaramm')
