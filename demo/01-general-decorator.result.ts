function getFibonacci(n: number): number {
    if (n === 1 || n === 2) {
        return 1
    }
    return getFibonacci(n - 1) + getFibonacci(n - 2)
}


function squared(original: (n: number) => number): (n: number) => number {
    return (n: number) => original(n)**2
}

const getSquaredFibonacci = squared(getFibonacci)

console.log(getSquaredFibonacci(10))
