function getFibonacci(n: number): number {
    if (n === 1 || n === 2) {
        return 1
    }
    return getFibonacci(n - 1) + getFibonacci(n - 2)
}

console.log(getFibonacci(10))
