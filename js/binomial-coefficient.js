export function binomialCoefficient(n, k) {
    if (Number.isNaN(n) || Number.isNaN(k)) {
        return NaN;
    }
    if (k < 0 || k > n) {
        return 0;
    }
    if (k === 0 || k === n) {
        return 1;
    }
    if (k === 1 || k === n - 1) {
        return n;
    }
    const fixedK = fixK(n, k);
    let result = n;
    for(let i = 2; i <= fixedK; i++) {
        result *= (n - i + 1) / i;
    }
    return Math.round(result);
}

function fixK(n, k) {
    return n - k < k ? n - k : k;
}