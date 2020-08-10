// countUniqueValues

// Implement function called countUniqueValues, which accepts a sorted arrray
//, and counts the negative unque values in the array. There can be negative 
// numbers in the array, but it will always be sorted.

// countUniqueValues [1, 2, 3, 3, 4, 5] // 5

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
}