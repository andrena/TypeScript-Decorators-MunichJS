type Constructor<T = {}> = new (...args: any[]) => T;

const instances: Map<any, any> = new Map<any, any>()

// Decorator factory
export function injectable(token?: string) {
    return <T, TBase extends Constructor<T>>(constructor: TBase, x: any) => {
        instances.set(token ?? constructor, new constructor())
    }
}

export function inject<T>(token: Constructor<T> | string): T {
    const instance = instances.get(token)
    if (!instance) {
        throw new Error('No instance for this token found')
    }
    return instance as T
}

// Decorator
export function injectionDecorator<T, S>(token: Constructor<T> | string) {
    return (target: undefined) => () => inject(token)
}