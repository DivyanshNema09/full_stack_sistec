// const num = 5;
// let isPrime = true;
// for(let i=2;i<=num/2;i++){
//     if(num%i==0){
//         isPrime = false;
//         break;
//     }
// }

// console.log(isPrime)

// let num = 2;
// let num2 = 20;
// for (let i = num; i <= num2; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= i / 2; j++) {
//         if (i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i)
//     }
// }

let arr =[10 ,20,30,40,50];
let target = 40;
let left = 0;
let right = 4;

while(left<right){
    let mid = Math.floor((right-left)/2 + left);
    if(arr[mid]==target){
        console.log(mid);
        break;
    }else if(arr[mid]>target){
        right = mid-1;
    }else{
        left = mid+1;
    }
}
console.log(hey)