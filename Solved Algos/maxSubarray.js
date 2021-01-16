const maxSubArray = function(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for(let i = 1; i < nums.length; i++){
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if(maxCurrent > maxGlobal){
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
  
};

console.log(maxSubArray([1, 2, -1, 2, -4]))