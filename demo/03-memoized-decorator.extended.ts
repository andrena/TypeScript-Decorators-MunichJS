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

function memoized<This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Return,
) {
    const cache: { [cacheKey: string]: Return } = {}

    return function (this: This, ...args: Args): Return {
        try {
            const cacheKey = JSON.stringify(args)
            const cachedResult = cache[cacheKey]
            if (cachedResult !== undefined) {
                return cachedResult
            }
            const result = target.call(this, ...args)
            cache[cacheKey] = result
            return result
        } catch (e) {
            console.error('Error for ', ...args)
            console.error(e)
            throw e
        }
    }
}

const fibonacci = new Fibonacci()

console.log(fibonacci.get(10))

