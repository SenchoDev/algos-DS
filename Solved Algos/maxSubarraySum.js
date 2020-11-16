// maxSubarraySum
// Write a function called maxSubArraySum which accepts an array of integers
// and a nubmer called n, The function should calculate the maximum of n consecutive elements
// in the array;

// maxSubarraySym([4,2,1,6], 1) return // 6


function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4],3));
