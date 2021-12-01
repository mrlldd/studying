export function factorial(n) {
    if (n <= 0) {
        throw new Error(`Invalid number: ${n}`);
    }

    let result = 1;
    for (let i = 0; i <= n; i++) {
        result *= i;
    }
    return result;
}