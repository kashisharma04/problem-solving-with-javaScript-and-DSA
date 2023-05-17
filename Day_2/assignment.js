// Home assignment
// 1. find the maximum element in an array

let arr = [10,4,20,40,55,67,89,23,15]
let max = arr[0];
for(let i=0; i<arr.length;i++){
    //  max = arr[0]
    if(arr[i]>max){    
        max=arr[i]   
        // console.log(max)
    }
}
console.log("Maximum element in array:-->> ",max)

// 2. find the minimum element in an array

let arr1= [12,3,110,2456,8,1,23,1234]
let min = arr[0]
for(let i=0;i<arr1.length;i++){
    if(arr1[i]<min){     
        //3<12 min =3; 110<3;  2456<3 ;1<3 ;min=1
        min=arr1[i]
        // console.log(min)
    }
}
console.log("Minimum element in array:-->> ",min)
// 3. find the second largest element in an array
let arr3 = [3, 6, 1, 5, 8,0]           //linear sorting :- swapping 
for (let i = 0; i < arr3.length;) {     
    if (arr3[i] > arr3[i + 1]) {      
        let temp1 = arr3[i];     
        arr3[i] = arr3[i + 1];  
        arr3[i + 1] = temp1;
        i = 0;    //will go to zero`th index first
    }
    else {
        i++  //i=1   i=2
    }
}
console.log("Second Largest element :-->> ",arr3[arr3.length-2])
// arr.length :- is length of array
// arr.length-1 :- desecnding length of array
// [1,2,3,4]
// aar.length -2 = 3

//  event - task
//  event registr. 
//  event loop :- infinte loop 
//  non blocking i/o


// 4. find the second smallest element in an array
let arr4 = [3, 6, 1, 5, 8,0]
for (let i = 0; i < arr4.length;) {     //0,1,2,3
    if (arr4[i] > arr4[i + 1]) {    
        let temp2 = arr4[i];
        arr4[i] = arr4[i + 1];
        arr4[i + 1] = temp2;
        i = 0;
    }
    else {
        i++  //i=1   i=2
    }
}
console.log("Second Smallest element :-->> ",(arr4[1]))

// 5. find the sum of all elements in an array
let myArr = [2,3,4,5,6]
let sum = 0;
for(let i=0; i<myArr.length;i++){
    sum += myArr[i]
}
console.log("Sum of All elements :-->> ",sum)
// 6. find the average of all elements in an array
let myArr1 = [2,3,4,5,6]
let sum1 = 0;
let avg
for(let i=0; i<myArr1.length;i++){
    sum1 += myArr1[i]
    avg = sum1/(myArr1.length)
}
console.log("Average of Array elements:-->> ",avg)
// 7. find the sum of all even elements in an array
let myNew = [2,23,7,3,4,5,6]
let total = 0;
for(let i=0; i<myNew.length;i++){
    if(myNew[i] % 2==0){
    total += myNew[i]
    // console.log(total)
    }
}
console.log("Sum of all EVEN numbers:-->> ",total)
// 8. find the sum of all odd elements in an array
let k =[1,2,3,4,5,6,7,8]
let s=0;
for(let i=0; i<k.length ;i++){
    if( k[i] % 2 != 0){
        s += k[i]
    }
}
console.log("Sum of all ODD numbers:-->> ",s)
// 9. find the number of even elements in an array
let even =[2,3,4,5,6,7,8,9,10]
let o = []
let temp;
for(let i=0;i<even.length;i++){
    if(even[i]%2==0){
        temp = even[i]
        o.push(temp[i])

        // console.log("hello -->>",o.length)
    }
    // o.push(temp.length)
}
console.log("Even element Count :-->> ",o.length)
// 10. find the number of odd elements in an array
let odd = [1,2,3,4,5,6,7,8,9,10]
let ok = []
let noo;
for(let i=0;i<odd.length;i++){
    if(odd[i]%2 != 0){
        noo= odd[i]
        ok.push(noo[i])
    }
}
console.log("Odd  element Count :-->> ", ok.length);