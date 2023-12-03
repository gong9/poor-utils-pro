interface ObjectType {
    [key: string]: any

}

/**
 * get value by key
 * notic: to mark proxy, so need take it layer by layer
 * @param obj
 * @param key
 */
export const getValueByKey = <T extends ObjectType>(obj: T, key: string) => {
    if (!key)
        return undefined

    const keys = key.split('/')

    let middleObj = obj

    for (let index = 0; index < keys.length; index++) {
        const currentKey = keys[index]

        if (typeof middleObj === 'object' && typeof JSON.parse(JSON.stringify(middleObj)) === 'object') {
            // eslint-disable-next-line no-prototype-builtins
            if (!JSON.parse(JSON.stringify(middleObj)).hasOwnProperty(currentKey))
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