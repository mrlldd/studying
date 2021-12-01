export function leastCommonMultiple(...values) {
    return values.reduce((prev, next) => (prev * next) / biggestCommonDenominator(prev, next));
}

function biggestCommonDenominator(x, y) {
   if (!y) {
       return x;
   }
   return biggestCommonDenominator(y, x % y);
}