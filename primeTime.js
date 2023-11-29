function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// for (let n = 9; n < 100; i++) {
//     if (n % 1 == 0 && n % n == 0) {
//         console.log(n);
//         break;
//     }
// }