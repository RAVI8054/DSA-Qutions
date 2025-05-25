//  recursion
// let count = 0;
// function abc(){
//     count++
//     console.log(count);
//     if(count >4){
//         return;
//     }
//     abc()
// }
// abc()

// function printNumber(n){
//     if(n>0){
//         printNumber(n-1);
//         console.log(n);
//     }
// }
// printNumber(10)

// 2.-----
// function fectoril(n){
//     if(n==1){
//         return 1
//     }
//     return n* fectoril(n-1)
// }
// console.log(fectoril(5));
//  const result=fectoril(5)
//  console.log(result);
 
//  time and space  complexity=O(n)

function Sum(n){
    if(n==1){
        return 1;
    }
    return n+Sum(n-1)
}
console.log(Sum(10))