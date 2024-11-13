class Fibonacci {
    get(n: number): number {
        if (n === 1 || n === 2) {
            return 1
        }
        return this.get(n - 1) + this.get(n - 2)
    }
}

function logged(original: (n: number) => number) {
    return function (n: number) {
        console.log(`Was called with ${n}`)
        const result = original(n)
        console.log(`Result was ${result}`)
        return result
    }
}

const fibonacci = new Fibonacci()
const getLoggedFibonacci = logged(fibonacci.get)

console.log(getLoggedFibonacci(10))

