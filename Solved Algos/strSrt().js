//Return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// First occurance in needle in haystack
// 2 inputs both stirngs
// output index number

// 0 number returned when needle is empty string

// simple example
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Input: haystack = "", needle = ""
// Output: 0

const strStr = function(haystack, needle){
  // check if needles length is 0 so we return 0
  if(needle.length === 0) return 0;
  
  if(needle === haystack) return 0;

  for(let i = 0; i <= haystack.length - needle.length; i++){
    if(needle === haystack.substring(i , i + needle.length )){
      return i;
    }
  }
  return -1;

}
console.log(strStr("mississipi", "issipi"));

