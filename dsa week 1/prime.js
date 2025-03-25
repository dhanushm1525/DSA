function prime(n) {
    if (n < 2) {
        return false;
    } else {
        if (n > 1) {
            for (let i = 2; i < n; i++) {
                if (n % i == 0) {
                    return false
                }
            }
        }
    }
    return true
}

console.log(prime(5))