// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command line arguments
const args = process.argv.slice(2);
console.log('arguments', args);
// Edge case: We need at least 2 arguments.
if (args.length < 2) {
  console.log(`Error, please enter at least 2 arguments`);
  process.exit();
} 

// we need an accumulator

let total = 0;

// loop through each
for (let arg of args) {
  // Edge case: If any argument is not a whole number, skip it.
  // Math.floor
  // typeof?
  // % modulo => arg % 1 === 0
  // regex
  // => Number.isInteger()

  if (Number.isInteger(Number(arg))) {
    // add them together
    // Typecast the string into a number
    total += Number(arg);
  }

  // Edge case: If any argument is not a number, output an error message.
  if(isNaN(Number(arg))) {
    console.log(`Error: please enter only numbers`);
    // stop the execution
    // return;
    process.exit();
  } 
  // console.log('arg:', arg, 'total:', total, "type:", typeof Number(arg));
    // print out the sum
    console.log('total', total);


}


