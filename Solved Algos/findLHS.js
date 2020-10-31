// Longest Harmonious Subsequence
// inputs always arrays
// outputs arrays length
// if found no harmonious subsequence return 0

// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5

// Input: nums = [1,2,3,4]
// Output: 2

// Input: nums = [1,1,1,1]
// Output: 0
// no empty arrays

// One solution but not performant at all

// const findLHS = function (nums) {
//   let numsOccuranceCount = {};
//   let resultLength = 0;
//   for (let num of nums) {
//     numsOccuranceCount[num] = (numsOccuranceCount[num] || 0) + 1;
//   }

//   for (const [key1, value1] of Object.entries(numsOccuranceCount)) {
//     for (const [key2, value2] of Object.entries(numsOccuranceCount)) {
//       if (key1 - key2 === Math.abs(1) && value1 + value2 > resultLength) {
//         resultLength = value1 + value2;
//       }
//     }
//   }
//   return resultLength === 0 ? 0 : resultLength;
// };

// console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))

const findLHS = function(nums){
  let res = 0;
  for(let i = 0; i < nums.length; i++){
    let count = 0;
    let flag = false;
    for(let j = 0; i < nums.length; i++){
      if(nums[j] === nums[i]) {
        count++;
      } else if(nums[j] + 1 === nums[i]){
        count++;
        flag=true;
      }
    }
    if(flag){
      res = Math.max(count, res);
    }
  }
  return res;
}
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
