// For loop that logs "Fizz"
// if a number is divisible by
// 3, "Buzz" if divisible by 5,
// "Fizz Buzz" if divisible by 
// both numbers, and just the number
// if it's divisible by neither.

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}