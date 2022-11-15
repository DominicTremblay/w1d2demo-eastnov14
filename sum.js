// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command line arguments
const args = process.argv.slice(2);
console.log('arguments', args);
// Edge case: We need at least 2 arguments.

// we need an accumulator

let total = 0;

// loop through each
for (let arg of args) {
  // add them together
  // Typecast the string into a number
  total += Number(arg);

  console.log('arg:', arg, 'total:', total, "type:", typeof Number(arg));
}

// Edge case: If any argument is not a whole number, skip it.
// Edge case: If any argument is not a number, output an error message.

// print out the sum
console.log('total', total);
