export function memoized<This, Args extends any[], Return>(target: (this: This, ...args: Args) => Return) {
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

export function logged<This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
) {
    let indentationDepth = 0

    return function (this: This, ...args: Args) {
        const className = (this as any).constructor.name
        const indent = '  '.repeat(indentationDepth)
        console.info(`${indent}Invoking ${context.private ? 'private' : 'public'} method ${className}.${String(context.name)} with params ${args}`)
        indentationDepth++
        try {
            const result = target.call(this, ...args)
            console.info(`${indent}Result was ${result}`)
            indentationDepth--
            return result
        } catch (e) {
            console.error('Threw an error: ', e)
            console.error(e)
            throw e
        }
    }
}
