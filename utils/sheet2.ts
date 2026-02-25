function SumResult(a: number, b: number): number {
    return a + b;
}

function SubtractResult(a: number, b: number): number {
    return a - b;
}

function MultiplyResult(a: number, b: number): number {
    return a * b;
}

function DivideResult(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

export { SumResult, SubtractResult, MultiplyResult, DivideResult };

console.log(SumResult(5, 7)); // Output: 8
console.log(SubtractResult(5, 7)); // Output: 2
console.log(MultiplyResult(5, 3)); // Output: 15
console.log(DivideResult(5, 0)); // Output: 1.6666666666666667