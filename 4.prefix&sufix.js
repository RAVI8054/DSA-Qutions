// array runnng problem
// ===========running product prefix====
// let array=[1,2,3,4,5,6]
// let ans =[];
// let product=1;
// for(let i=0;i<array.length;i++){
// product*=array[i]
// ans.push(product)
// }
// console.log(ans);

// ==suffix product==
// let arr=[2,10,9,5,1]
// let ans=new Array(arr.length-1);
// let product=1;

// for(let i=arr.length-1;i>=0;i--){
// product=arr[i]*product
// ans[i]=product
// }
// console.log(ans);

// =====================================
// 724. Find Pivot Index
// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the 
// sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no
//  elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

// let nums = [1, 7, 3, 6,5,6];

// function callnums(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         let ls = 0;
//         let rs = 0;

//         for (let t = 0; t < i; t++) {
//             ls += nums[t];
//         }
//         for (let p = i + 1; p < nums.length; p++) {
//             rs += nums[p];
//         }

//         if (ls === rs) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(callnums(nums));  //  Correct function call

// optimize pivote solution with prefix and sufix
//  var pivotIndex = function(nums) {

// // ----- presfix sum --------
//        let ps = [];
//        let prefixSum=0;
//     for(let t=0;t<nums.length;t++){
//         prefixSum = prefixSum +nums[t]
//         ps.push( prefixSum);   
//          }

// // -------- sufix sum --------
//         let  ss=new Array(nums.length)
//         let suffixSum=0;
//     for(let i=nums.length-1;i>=0;i--){
//           suffixSum = suffixSum +nums[i]
//           ss[i]=suffixSum
//     }
//     for (let i = 0; i < nums.length; i++) {
//         let ls = 0;
//         let rs = 0;   
//          if(i>0){
//             ls = ps[i-1]
//          }
//          if(i<nums.length-1){
//              rs = ss[i+1]}
//      if(ls==rs){
//         return i;
//      }
//     } 
// return -1   
// };


// // ========= averge============/
// Input: arr[] = [10, 20, 30, 40, 50]
// Output: [10, 15, 20, 25, 30] 
// Explanation: 10 / 1 = 10, (10 + 20) / 2 = 15, (10 + 20 + 30) / 3 = 20 and so on.

// let  arr = [10, 20, 30, 40, 50]

// let ans=[]
// let sum=0;
// let avg =0;
// for(let i=0;i<arr.length;i++){
//      sum=sum+arr[i]
//    avg=sum/(i+1)
//    ans.push(avg)
// }
// console.log(ans)


// 238. Given an integer array nums, return an array answer such that answer[i] is equal 
// to the product of all the elements of nums except nums[i].
  
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// var productExceptSelf = function(nums) {
//     let ans=[]
//     let preproduct=1
//     let pp=[]
//     for(let i=0;i<nums.length;i++){
//         preproduct *= nums[i]
//         pp.push(preproduct);
//     }
//     let suffproduct=1
//     let sp=new Array(nums.length)
//     for(let i=nums.length-1;i>=0;i--){
//         suffproduct *= nums[i];
//         sp[i] =suffproduct;
//     }
//     for(let i=0;i<nums.length;i++){
//         let lp=1;
//         let rp=1;
//         if(i>0){
//             lp=pp[i-1]
//         }
//         if(i<nums.length-1){
//             rp=sp[i+1]
//         }
//             ans.push(lp*rp)
//     }
//       return  ans;;
// };
















