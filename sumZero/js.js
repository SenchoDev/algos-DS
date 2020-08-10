// sumZero
// write a function called sumZero which accepts a sorted array of integers.
// The functiuon should find first pair where the sum is 0. Return an array that incluedes both values
// that sum to zero or undefined if a pair does not exist

// I used POINTER SOLIVING PATTERN where your reduce O(n2) to O(n);

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

const result = sumZero([-4, -3, -2, 0, 2, 4])
console.log(result)
