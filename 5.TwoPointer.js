// two sum with2 pointer help
// let arr=[2,4,5,7,9,11,12,15]
// let target=16
// let ans=[];
// let i=0;
// let j=arr.length-1;
// while(i<j){
//     let sum=arr[i]+arr[j]
//   if(sum>target){
//     j--
//   }else if(sum==target){
//      ans.push(i,j)
//      break
//   }else{
//     i++
//   }
// }
// console.log(ans)

// ==Merge tha sorted Array with accending order===
// let a1=[2,3,5,7,9,10,11]
// let a2=[1,4,8]
// let i=0;
// let j=0;
// let result=[]
// while( i<a1.length && j<a2.length){
//     if(a1[i]<=a2[j]){
//         result.push(a1[i])
//         i++;
//     }else{
//         result.push(a2[j]);
//         j++
//     }
// }
// while(i<a1.length ){
//     result.push(a1[i])
//         i++;
// }
// while( j<a2.length){
//     result.push(a2[j]);
//         j++
// }

// ====array decending order==
//  let a1=[2,3,5,7,9,10,11]
// let a2=[1,4,8]
// let i=a1.length-1;
// let j=a2.length-1;
// let result=[]
// while( i>=0&& j>=0){
//     if(a1[i]>a2[j]){
//         result.push(a1[i])
//         i--
//     }else{
//         result.push(a2[j]);
//         j--
//     }
// }
// while(i>=0 ){
//     result.push(a1[i])
//         i--
// }
// while( j>=0){
//     result.push(a2[j]);
//         j--
// }
// console.log(result)

// 2956==find common elemnt

nums1=[4,3,2,3,1]
nums2=[2,2,5,2,3,6]
function array(nums1,nums2){
 let answer1 = 0;
    let answer2 = 0;
    //  nums1 check
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                answer1++; 
                break; 
            }
        }
    }
    //  nums2 check
    for (let i = 0; i < nums2.length; i++) {
        for (let j = 0; j < nums1.length; j++) {
            if (nums2[i] === nums1[j]) {
                answer2++;  
                break;  
            }
        }
    } 
    return [answer1, answer2];  
}
console.log(array(nums1,nums2))











