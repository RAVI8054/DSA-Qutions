// min and max in aaray

// const a=[3,6,7,1,2]
// let max=a[0];
// let min=a[0];
// for(let i=0;i<a.length-1;i++){
//     if(a[i]>max){
//         max=a[i];
//     }
//     if(a[i]<min){
//         min=a[i]
//     }
// }
// console.log("max",max)
// console.log("min",min)

// time complexity-O(n)
// spacecomplexity=O(1)
// ----------------------------------

// 2.concatenate given array twice
// array
// output(array,array)

// const a =[1,2,3]
// output=[1,2,3,1,2,3]

// const a =[1,2,3]
// let j=a.length
// for(let i=0;i<j;i++){
//     a[j+i] = a[i];
// }
// console.log(a)

//3. -----------Running Array prblem---------

//A..... Bruth forse solution
// output= sum of perevious elemnt index at time = [1,3,6]
// const nums =[1,2,3,4,5]
// let output = new Array(nums.length).fill(0)
// for(let i=0;i<nums.length;i++){
//     for(let j=0;j<=i;j++){
//         output[i] = output[i]+nums[j]
//     }
// }
// console.log(output)
// B..........................................
// const nums =[1,2,3,4,5]
// let ans = new Array(nums.length);
// ans[0]=nums[0];
// for(let i=1;i<nums.length;i++){
//     ans[i]=ans[i-1]+nums[i]
// }
// console.log(ans);


// --------Linear_Search------------
// let target=78;
// const Array=[12,14,78,15]
// for(let i=0;i<Array.length;i++){
//     if(Array[i]===target){
//     console.log(i)
//     }
// }

// --------Binarry Search----------
//  let array = [1, 2, 4, 5, 8, 10, 18, 25];
//  let target = 10;

//  function BinarySearch(target, array) {
//     let start = 0;
//     let end = array.length - 1;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);

//         if (array[mid] === target) {
//             return mid; }

//         if (array[mid] < target) {
//             start = mid + 1;
//         } else {
//             end = mid - 1; }
//     }
//     return -1;
// }
// const result = BinarySearch(target, array);
// result === -1 ? console.log("Element not found") : console.log("Element found at index", result);

// ------------ 1in array-------------

// ==========================================

// ==========Insertion---Sorting======
//const arr=[19,2,3,17,23,10]
//let n=arr.length;

// function insertSort(arr,n){
//     let key,j;
//     for(let i=1;i<n;i++){
//         key=arr[i];//2
//         j=i-1;
//         while(j>=0 &&arr[j]>key){
//             arr[j+1]=arr[j]; //19>2  [19,19,3,17,23,10]
//             j--;
//         }
//         arr[j+1]=key;// ar[0]=2{[2,19,3,17,23,10]}
//     }
//     return arr;
// }

// -------Bubble Sorting------
const arr = [6, 0, 3, 5, 7]
let n = arr.length;





























