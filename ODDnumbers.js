/**
 * this is my attempt to find the one digit difference number
 */
/**
 * this is a helper function stolen from the
 * https://stackoverflow.com/questions/73184756/finding-prime-number-in-javascript
 * @param {number} a 
 * @returns either true or false
 */
function isPrime(a){
    for(i=2; i<=a; i++){
     if(a % i != 0){
        //returns true if the number is a prime number
        return true
     }
      else{
        //returns false if the number is not a prime number
        return false
      }
   }
}
/**
 * initial values for the loops is from 10 to 10million
 * @param {number} start 
 * @param {number} end 
 * @returns oddnumbers list which are one digit difference with consecutive digits
 */
function ODD(start, end) {
    const oddNumbers = [];//initial declaration of empty list
    //using for loop to check whether the num is ODD or not
    for (let i = start; i <= end; i++) { 
        //inserting the loop index number to digits as string
        const digits = i.toString().split("");
        //initial consideration as isOddnumber is true
        let isOddnumber = true;
        //loop for checking whether the difference is one or not
        for (let j = 0; j < digits.length - 1; j++) {
            //math.abs is for modulus value
            if (Math.abs(parseInt(digits[j]) - parseInt(digits[j + 1])) !== 1) {
                isOddnumber = false;
            break;
            }
        }
        //if both condition are true push the number to oddnumberss list
        if (isOddnumber && isPrime(i)) {
            oddNumbers.push(i);
            }
    }
  
    return oddNumbers;
  }
  
const oddNumbers = ODD(10, 10000000);
//statement for printing the no of values
console.log(`There are ${oddNumbers.length} one digit difference prime numbers between 0 and 10 million.`);
//statement to print oddnumbers list
console.log(oddNumbers)