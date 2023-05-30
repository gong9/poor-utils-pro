import type { TargetObjType } from '../../types'
/**
 * FilterEmptyVal [include undefined or null]
 *
 * @param {object} resJson
 * @example filterEmptyVal(
  {
    a: null,
    b: {
      c: undefined,
      d: 1,
    },
  }) // {b:{d:1}}
 */

const filterEmptyVal = <T extends TargetObjType>(resJson: T): T => {
  const obj: any = Array.isArray(resJson) ? [] : {}
  for (const [k, v] of Object.entries(resJson)) {
    // handle undefined or null
    if (!(v === undefined || v === null))
      obj[k] = typeof v === 'object' ? filterEmptyVal((v as T)) : v
  }

  return obj
}

export default filterEmptyVal

