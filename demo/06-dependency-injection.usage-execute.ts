import { combineGreetings, ConsumingClass } from './06-dependency-injection.usage'

console.log(combineGreetings())

let consumer = new ConsumingClass()
consumer.sayHi()