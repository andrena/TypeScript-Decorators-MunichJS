@singleton
class Fibonacci {
    get(n: number): number {
        if (n === 1 || n === 2) {
            return 1
        }
        return this.get(n - 1) + this.get(n - 2)
    }
}

function singleton<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            if ((constructor as any)._instance) {
                return (constructor as any)._instance
            }
            super(...args);
            (constructor as any)._instance = this
        }
    }
}

const fibo1 = new Fibonacci()
const fibo2 = new Fibonacci()

console.log(fibo1 === fibo2)