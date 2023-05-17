// array :-
let arr = [1,2,3,45,6,7,7]
let k = 3
for(let i=0;i<arr.length;i++){
    if(arr[i]==k){
        console.log("True");
    }
}
// ==============================================================================
// ques 1
// Given an array (or string), the task is to reverse the array/string.
// Examples : 
 

// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

let arr1 = [1,2,3]
let newArr =[]
for(let i=arr1.length-1;i>=0 ;i--){
    newArr.push(arr1[i])
}
// apporach2 
console.log(newArr)
function fun(arra,size){
    for(let i=0;i<size;i++){
        console.log(arr[i]);
    }
}
let arra = [1,2,3,45,5]
// ==============================================================================
// ques 2
// sort an array
// assending order sorting
// descening order sorting
let myArr = [12,3,45,6,267,89]
let sk = arr[0]
for(let i=0;i<myArr.length;i++){
    if(sk>arr[i]){
        console.log(arr[0])
    }
    // else if()
}
// Home assignment
// 1. find the maximum element in an array
// 2. find the minimum element in an array
// 3. find the second largest element in an array
// 4. find the second smallest element in an array
// 5. find the sum of all elements in an array
// 6. find the average of all elements in an array
// 7. find the sum of all even elements in an array
// 8. find the sum of all odd elements in an array
// 9. find the number of even elements in an array
// 10. find the number of odd elements in an array

// let arr2 = [12,34,56,2,35]
// let maxNum = arr[0]
// let secondNum = null;
// for(let i=1;i<arr2.length;i++){
//     if(arr2[i] > max){
//         secondNum = maxNum;
//         maxNum = arr2[i];
//         console.log(secondNum)
//     }
//     else if (arr2[i] < maxNum && (secondNum === null || arr2[i] > secondNum)) {
//         secondNum = arr2[i];
//         console.log(secondNum)
//     }
// }
// console.log(secondNum)


// starting form 0th index to last index
// for (let i = 0; i < arr.length; i++) {
//   // starting from i+1 index to last index
//   for (let j = i + 1; j < arr.length; j++) {
//     // compare the elements
//     if (arr[i] > arr[j]) {
//       // swap the elements
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
