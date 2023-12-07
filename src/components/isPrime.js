function isPrime(num) { 
    if (num <= 1) return false; 
  
    for (let i = 2; i <= Math.sqrt(num); i++) { 
      if (num % i === 0) return false; 
    } 
  
    return true; 
  }
  
  // Example usage:
  const exampleNumber = 17;
  const isExamplePrime = isPrime(exampleNumber);
  
  console.log(`Is ${exampleNumber} prime? ${isExamplePrime}`);