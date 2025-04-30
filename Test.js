// To Reverse a given string
function reverse (str) {
 
    const reversed = str.split("").reverse("").join("")
    console.log("Reversed String :",reversed)
}
reverse( "Education")


// TO find given humber is add or even 
function check (n){
    if(n%2==0)
        console.log("Given nunmber is evev")
    else{
        console.log("Given Number iS Odd")
    }

}

check(45)

// Sum of the all numbers in the array
const num  = [1,2,3,4,5]
sum = 0 
for(i=0; i<=num.length; i++){
      sum += i;    
} 
console.log("Total sum is ",sum)


// return the even numbers 
const arr = [1,2,3,4,5,6,7,8,9,10] 
const even = arr.filter((n)=> n%2==0) 
console.log("even numbers",even)

// Double Program
const arr1 = [1,2,3,4,5,6,7,8,9]
const arr2 = arr1.map((n)=> n*2)
console.log("doubled numbers",arr2)

// To find greater than 10 program
const newnum = [13,424,6,4,35,57,68,979,1,3,6,]
const nums = newnum.filter((n) => n>10)
console.log("Greater than 10 ",nums)


// return Negative number
const negativenum = [2,4,5,-3,0,-4,-24,-67,-6]
let negative = negativenum.some((n)=> n<0)
console.log("Negative :",negative)

// return Positive number
const positivenum = [2,4,5,-3,0,-4,-24,-67,-6]
let positive = negativenum.some((n)=> n>0)
console.log("Positive :",positive)


// Count Even numbers
const Evens = [2,4,5,3,0,44,24,67,6];
let Evencounts = 0;
let Counteven = Evens.filter(n=>n%2==0).length
console.log("Even Number Count ", Counteven)

// Remove Duplicate in array


let array = [1,2,3,3,4,5,6,6124,4,2];
let newarray = [];

function duplicate (n) {
  
   for(i=0;i<array.length;i++)
   {
        if (!newarray.includes(array[i]))
        newarray.push(array[i])
   }
   console.log("After Removing Duplicates " ,newarray)

}

duplicate(array)

// Flated Array Program

const array3 = [1,2,55 ,[2,876,9] , 3,6,7]
console.log(array3.flat())