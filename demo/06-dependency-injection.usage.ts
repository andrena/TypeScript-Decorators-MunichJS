import { inject, injectable, injectionDecorator } from './06-dependency-injection'

@injectable()
export class Foo {
    getHi() {
        return 'Hi'
    }
}

@injectable('bar')
export class Bar {
    getHello() {
        return 'Hello'
    }
}

export function combineGreetings() {
    const hi = inject(Foo).getHi()
    const hello = inject<Bar>('bar').getHello()

    return `${hi} and ${hello}`
}

//////////////////////////////


export class ConsumingClass {
    @injectionDecorator(Foo)
    foo!: Foo

    sayHi() {
        console.log(this.foo.getHi())
    }
}
