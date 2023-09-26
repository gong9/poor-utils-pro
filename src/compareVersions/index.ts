/**
 * compareVersions
 * @param v1
 * @param v2
 * @returns
 */
const compareVersions = (v1: string, v2: string): number => {
    const regex = /^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:-([a-z]+)(\d+)?)?$/
    const labels = ['alpha', 'beta', 'rc']
    const labelsMap = labels.reduce((acc, label, index) => {
        acc[label] = index
        return acc
    }, {} as { [key: string]: number })

    const handleLabelToNumber = (label: string) => {
        if (!label)
            return labels.length

        return labelsMap[label] || 0
    }

    const getVersionParts = (version: string): number[] => {
        const matches = version.match(regex)
        if (!matches)
            return []
        const [, major, minor = '0', patch = '0', label = '', labelVersion = '0'] = matches

        const labelNumber = handleLabelToNumber(label)

        return [Number(major), Number(minor), Number(patch), labelNumber, Number(labelVersion)]
    }

    const version1Parts = getVersionParts(v1)
    const version2Parts = getVersionParts(v2)

    for (let i = 0; i < version1Parts.length; i++) {
        if (version1Parts[i] > version2Parts[i])
            return 1
        else if (version1Parts[i] < version2Parts[i])
            return -1
    }

    return 0
}

export default compareVersions