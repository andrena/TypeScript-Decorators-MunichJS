class Fibonacci {
    @logged
    get(n: number): number {
        if (n === 1 || n === 2) {
            return 1
        }
        return this.get(n - 1) + this.get(n - 2)
    }
}

// Note: Add prefix
// Note: Show type safety
function logged(original: (n: number) => number) {
    return function (this: (n: number) => number, n: number) {
        console.log(`Was called with ${n}`)
        const result = original.call(this, n)
        console.log(`Result was ${result}`)
        return result
    }
}

const fibonacci = new Fibonacci()

console.log(fibonacci.get(10))
