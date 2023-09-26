import compareVersions from './index'

describe('compareVersions', () => {
    it('base', () => {
        expect(compareVersions('1.0.0', '1.0.0')).toBe(0)
        expect(compareVersions('1.0.0', '1.0.1')).toBe(-1)
        expect(compareVersions('1.0.1', '1.0.0')).toBe(1)
        expect(compareVersions('1.0.0', '1.1.0')).toBe(-1)
        expect(compareVersions('1.1.0', '1.0.0')).toBe(1)
        expect(compareVersions('1.0.0', '2.0.0')).toBe(-1)
        expect(compareVersions('2.0.0', '1.0.0')).toBe(1)
    })

    it('beta or alpha or rc', () => {
        expect(compareVersions('1.0.0-alpha100', '1.0.0-beta0')).toBe(-1)
        expect(compareVersions('1.0.0-alpha1', '1.0.0-alpha0')).toBe(1)
        expect(compareVersions('1.0.0-alpha0', '1.0.0-alpha1')).toBe(-1)
        expect(compareVersions('2.0.0-alpha0', '1.0.0-alpha1')).toBe(1)
        expect(compareVersions('2.0.0', '2.0.0-alpha0')).toBe(1)
        expect(compareVersions('2.0.0', '2.0.0-rc1')).toBe(1)
        expect(compareVersions('2.0.0-beta100', '2.0.0-rc1')).toBe(-1)
    })
})