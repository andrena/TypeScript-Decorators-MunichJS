class Fibonacci {
    get(n: number): number {
        if (n === 1 || n === 2) {
            return 1
        }
        return this.get(n - 1) + this.get(n - 2)
    }
}

const fibonacci = new Fibonacci()

const getFibonacci = fibonacci.get

console.log(getFibonacci(10))