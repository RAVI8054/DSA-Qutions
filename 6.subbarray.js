// Given an array of integers arr[]  and a number k.
//  Return the maximum sum of a subarray of size k.

// Input: arr[] = [100, 200, 300, 400] , k = 2
// Output: 700
// Explanation: arr3  + arr4 = 700, which is maximum.

// class Solution {
//     maximumSumSubarray(arr, k) {
//     let i=0;
//     let j=0;
//     let maxsum=0;
//     let sum=0;

//     while (j<arr.length){
//         sum = sum + arr[j]

//         //<k k is not reched
//         if(j-i+1 <k ){
//             j++
//         }else if(j-i+1==k){
//             //==k i reched
//             if(sum > maxsum){
//                 maxsum = sum;
//             }
//             //kick out past
//             sum=sum-arr[i];
//             i++;
//             // add j in sliding window
//             j++;
//         }
//     }
//           return maxsum;
//     }

// }

// =============================
// Given an array arr[]  and a positive integer k, find the first negative 
// integer for each and every window(contiguous subarray) of size k.
let arr = [-8, 2, 3, -6, 10] 
   let k = 2
// Output: [-8, 0, -6, -6]
 function firstNeg(arr, k) {
    let i = 0;
    let j = 0;
    let ans = []
    let neg = []
    while (j < arr.length) {
        if (arr[j] < 0) {
            neg.push(arr[j]);
        }
        //  if <k k is not reched
        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 == k) {
            if (neg.length == 0) {
                ans.push(0);
            } else {
                ans.push(neg[0])
            }
            //  kiking out the past
            if (arr[i] == neg[0]) {
                neg.shift()
            }
            i++
            // add next j
            j++
        }
    }
    return ans;
}

console.log( firstNeg(arr, k))