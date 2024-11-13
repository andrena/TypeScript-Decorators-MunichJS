class Fibonacci {
    @logged
    get(n: number): number {
        if (n === 1 || n === 2) {
            return 1
        }
        return this.get(n - 1) + this.get(n - 2)
    }
}

function logged<TThis, TArgs extends any[], TReturn>(
    target: (this: TThis, ...args: TArgs) => TReturn,
    context: ClassMethodDecoratorContext<TThis, (this: TThis, ...args: TArgs) => TReturn>,
) {
    let indentationDepth = 0
    return function (this: TThis, ...args: TArgs) {
        const indent = '  '.repeat(indentationDepth)
        const className = (this as any).constructor.name
        console.info(`${indent}Invoking ${context.private ? 'private' : 'public'} method ${className}.${String(context.name)} with params ${args}`)
        indentationDepth++
        const result = target.call(this, ...args)
        indentationDepth--
        console.info(`${indent}Result was ${result}`)
        return result
    }
}

const fibonacci = new Fibonacci()

console.log(fibonacci.get(10))
