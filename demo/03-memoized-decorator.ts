import { logged } from "./decorators"

class Fibonacci {
    @logged
    @memoized
    get(n: number): number {
        if (n === 1 || n === 2) {
            return 1
        }
        return this.get(n - 1) + this.get(n - 2)
    }
}

function memoized(target: (n: number) => number) {
    const cache: { [fiboIndex: number]: number } = {}

    return function (this: any, n: number) {
        const cachedResult = cache[n]
        if (cachedResult !== undefined) {
            return cachedResult
        }
        const result = target.call(this, n)
        cache[n] = result
        return result
    }
}

const fibonacci = new Fibonacci()

console.log(fibonacci.get(10))
