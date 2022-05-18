// const printOdd = function(){
// var arr = [1,2,3,4,5,6,7,8,9,10];
// for(var i=0; i<arr.length-1;i++){
//     if (arr[i]%2 !== 0){
//         console.log(arr[i]);
//     }
// }
// }


// let arr = [1,2,3,4,5,6,7,8,9,10];

// let odds = arr.filter(n => n%2);
// console.log(odds);



// var str = "welcome to ouR worLD";

// (function(str){
//     str = str.toLowerCase().split(' ').map(function(word){
//         return (word.charAt(0).toUpperCase() + word.slice(1))
//     }).join(' ');
//     console.log(str);
// });

//Return all the prime numbers in an array

// var arr =[12,23,32,44,5,6,7,8,9,10,11,12,3,14];
// var primeArray = [];
// var flag = 0;
// primeNumber(arr);

// function primeNumber(arr){
// count = arr.length;
// for (i = 0; i < count; i++){
//     var val = arr[i];
//     if (val == 1 || val == 2 || val ==3){
//         primeArray.push(val);
//     }else{
//     secCount = val/2;
//         for (j=2; j <secCount; j++){
//             //  console.log(arr[i]%j);
//         if (val%j == 0) {
//             console.log(val%j);
//                 flag += 1;
//                 continue;
//                 console.log("Inside mod check: ");
//              }
//          }
//     if (flag == 0){
//     console.log("inside add array: "+ val);
//     primeArray.push(val);
//     }
//     flag = 0;
//     }
// }
//     console.log(primeArray);
// }

// var arr =[12,23,32,44,5,6,7,8,9,10,11,12,3,14];
// arr = arr.filter((number) =>{
//     for(i=2;i<number/2;i++){
//        if(number % i === 0) return false;
//     }
//     return true;
// });
// console.log(arr);

// const arr = ['carecar', 1344, 12321, 'did', 'cannot', "ramar"];
// const isPalindrome = el => {
//    const str = String(el);
//    let i = 0;
//    let j = str.length - 1;
//    while(i < j) {
//       if(str[i] === str[j]) {
//          i++;
//          j--;
//       }
//       else {
//          return false;
//       }
//    }
//    return true;
// };
// const findPalindrome = arr => {
//    return arr.filter(el => isPalindrome(el));
// };
// console.log(findPalindrome(arr));

// arr =[26,38,49,49,38,26];
// (function(){
// for(i=0;i<arr.length;i++){
//     for (j= i+1; j<arr.length; j++){
//         if (arr[i]==arr[j]) {
//             arr.pop(arr[i]);
//         }
//     }
//   }
// })();
// console.log(arr);

arr = [26,38,49,49,38,26];
k=1;
temp = 0;
let rotate = function(){
    for (i=0; i<k ;i++){
        temp = arr[i];
        for (j=0;j<arr.length-1;j++){
            arr[j]=arr[j+1];
        }
        arr[arr.length-1] = temp;
    }
}
console.log(arr);