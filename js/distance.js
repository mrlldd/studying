export function distance(x0, y0, x1, y1) {
    return Math.hypot(x1 - x0, y1 - y0);
}

export function euclideanDistance(x, y) {
    return Math.hypot(...Object.keys(x).map(k => y[k] - x[k]));
}

export function hammingDistance(num1, num2) {
    const result = (num1 ^ num2).toString(2).match(/1/g) || '';
    return result.length;
}