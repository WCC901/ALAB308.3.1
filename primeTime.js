function isPrime(int) {
    if (int <= 1) {
        return false;
    } else {
        for (let i = 2; i < int; i++) {
            if (int % i === 0) {
                return false;
            }
        }
    }
    return true;
}

//Cecks for the closest and
//greatest prime number
for (let n = 4; n < 100; n++) {
    if (isPrime(n)) {
        console.log(n);
        break;
    }
}

