// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
// example 
// Input: nums = [2,2,1]
// Output: 1

var singleNumber = function(nums) {
  let set = new Set();

  for(let num of nums){
    if(set.has(num)){
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return Array.from(set)[0]
};

console.log(singleNumber([2,2,1]))


