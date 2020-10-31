//  Remove Duplicates from Sorted Array
// input always array

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]

var removeDuplicates = function(nums) {
  if(nums.length === 0) return 0;
  let pointer1 = 0;

  for(let pointer2 = 1; pointer2 < nums.length; pointer2++){
    if(nums[pointer1] !== nums[pointer2]){
      pointer1++;
      nums[pointer1] = nums[pointer2];
    }
  }
  return pointer1 + 1;


};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))