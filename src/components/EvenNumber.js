function filterEvenNumbers(numbers) {
    // Use the filter method to create a new array with only even numbers
    const evenNumbers = numbers.filter(number => number % 2 === 0);
  
    return evenNumbers;
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = filterEvenNumbers(numbersArray);
  console.log(result); 
  