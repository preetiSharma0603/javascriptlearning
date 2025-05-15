

export function checkEvenOdd(num: number): string {
    const numValue = Number(num);
    if (numValue % 2 == 0) {
      console.log("This message is from evenorodd file: number is even");
      return numValue + "--> Number is even";
    } else {
      console.log("This message is from evenorodd file: number is odd");
      return numValue + "--> Number is odd";
    }
  }

  
 
