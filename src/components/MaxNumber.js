function LargestElement(arr) { 
    if (arr.length === 0) { 
        console.log("Array is empty"); 
    } 
  
    return Math.max.apply(null, arr); 
} 
const arr = [22, 65, 1, 39]; 
console.log("Largest in given array is " + LargestElement(arr));