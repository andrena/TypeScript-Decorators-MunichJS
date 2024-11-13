type Constructor<T = {}> = new (...args: any[]) => T;

type Cloneable<T> = T & { deepClone: () => any}

function Cloneable<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        deepClone() {
            return JSON.parse(JSON.stringify(this));
        }
    };
}

@Cloneable
class Example {
    public data: any;

    constructor(data: any) {
        this.data = data;
    }

    printData() {
        console.log(this.data);
    }
}

const instance = new Example({ a: 1, b: 2 });
const clonedInstance = (instance as Cloneable<Example>).deepClone();

console.log(clonedInstance);
instance.data.a = 5;
console.log(instance.data);
console.log(clonedInstance.data);