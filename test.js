function generateRandomSixDigitString() {
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    const sixDigitString = randomNumber.toString();
    return sixDigitString;
  }
  
  // Example usage:
  const randomSixDigitString = generateRandomSixDigitString();
  console.log(randomSixDigitString);
  