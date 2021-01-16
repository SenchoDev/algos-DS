// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// 4 inputs 2 arrays and 2 nums
// output first array where values are sorted.

// input 
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

const merge = function(nums1, m, nums2, n){
  let first = m - 1; 
  let second =  n - 1;

  for(let i = m + n - 1; i >= 0; i--){
    if(second < 0){
      break;
    }
    if(nums1[first] > nums2[second]){
      nums1[i] = nums1[first];
      first--;
    } else {
      nums1[i] = nums2[second];
      second--;
    }
  }
  return nums1;
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))

