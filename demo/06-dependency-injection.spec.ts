import { when } from 'jest-when'
import { inject } from './06-dependency-injection'
import { combineGreetings, Foo } from './06-dependency-injection.usage'

jest.mock('./06-dependency-injection', () => {
    const original = jest.requireActual('./06-dependency-injection')
    return {
        ...original,
        inject: jest.fn(),
    }
})

describe('doSomething', () => {
    it('should combine greetings from Foo and Bar', () => {
        mockDependency(Foo, { getHi: () => 'mocked hi' })
        mockDependency('bar', { getHello: () => 'mocked hello' })

        const combinedGreetings = combineGreetings()

        expect(combinedGreetings).toEqual('mocked hi and mocked hello')
    })
})

function mockDependency(token: any, mockedValue: any) {
    when(inject).calledWith(token).mockReturnValue(mockedValue)
}