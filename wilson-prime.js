// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(p) {
    return(p == 5 || p == 13 || p == 563)
}

// assert.strictEqual(amIWilson(5), true)
// assert.strictEqual(amIWilson(9), false)
// assert.strictEqual(amIWilson(6), false)