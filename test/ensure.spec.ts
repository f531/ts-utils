import { describe, it } from 'mocha'
import { expect } from 'chai'
import { ensure } from '../src'

describe('ensure', () => {
    describe('without condition', () => {
        it('should pass', () => {
            const string = 'hello world'
            ensure({ string })
        })
        it('should fail because "string" is undefined', () => {
            expect(() => {
                const string = undefined
                ensure({ string })
            }).to.throw()
        })
    })
    describe('with condition', () => {
        it('should pass', () => {
            const string = 'hello world'
            const len = string.length
            ensure({ string }, ({ length }) => length === len)
        })
        it('should fail because condition fails', () => {
            expect(() => {
                const string = 'hello world'
                const len = string.length + 27
                ensure({ string }, ({ length }) => length === len)
            }).to.throw()
        })
    })
})

