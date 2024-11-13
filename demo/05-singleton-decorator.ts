class Fibonacci {
    get(n: number): number {
        if (n === 1 || n === 2) {
            return 1
        }
        return this.get(n - 1) + this.get(n - 2)
    }
}

const fibo1 = new Fibonacci()
const fibo2 = new Fibonacci()

console.log(fibo1 === fibo2)