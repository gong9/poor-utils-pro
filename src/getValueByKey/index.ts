interface ObjectType {
    [key: string]: any

}

/**
 * get value by key
 * @param obj
 * @param key
 */
const getValueByKey = <T extends ObjectType>(obj: T, key: string) => {
    if (!key)
        return undefined

    const keys = key.split('/')

    let middleObj = obj

    for (let index = 0; index < keys.length; index++) {
        const currentKey = keys[index]

        if (typeof middleObj === 'object') {
            // eslint-disable-next-line no-prototype-builtins
            if (!middleObj.hasOwnProperty(currentKey))
                return undefined

            else
                middleObj = middleObj[currentKey]
        }
        else {
            return undefined
        }
    }

    return middleObj
}

export default getValueByKey