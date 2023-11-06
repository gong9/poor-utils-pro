import getValueByKey from './'

describe('getValueByKey', () => {
    describe('normal', () => {
        test('normal', () => {
            const obj = {
                a: {
                    b: {
                        c: 1,
                    },
                },
            }
            expect(getValueByKey(obj, 'a/b/c')).toBe(1)
        })

        test('a/b', () => {
            const obj = {
                a: {
                    b: {
                        c: 1,
                    },
                },
            }
            expect(getValueByKey(obj, 'a/b')).toEqual({
                c: 1,
            })
        })

        test('a/b/c/d', () => {
            const obj = {
                a: {
                    b: {
                        c: 1,
                    },
                },
            }
            expect(getValueByKey(obj, 'a/b/c/d')).toBe(undefined)
        })
    })

    describe('key is empty', () => {
        test('key is empty', () => {
            const obj = {
                a: {
                    b: {
                        c: 1,
                    },
                },
            }
            expect(getValueByKey(obj, '')).toBe(undefined)
        })
    })

    describe('value has array', () => {
        test('normal', () => {
            const obj = {
                a: {
                    b: {
                        c: [1, 2, 3],
                    },
                },
            }
            expect(getValueByKey(obj, 'a/b/c')).toEqual([1, 2, 3])
        })

        test('a/b/c/1', () => {
            const obj = {
                a: {
                    b: {
                        c: [1, 2, 3],
                    },
                },
            }
            expect(getValueByKey(obj, 'a/b/c/1')).toBe(2)
        })

        test('a/b/c/1/2', () => {
            const obj = {
                a: {
                    b: {
                        c: [1, 2, 3],
                    },
                },
            }
            expect(getValueByKey(obj, 'a/b/c/1/2')).toBe(undefined)
        })
    })
})