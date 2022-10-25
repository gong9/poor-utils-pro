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

const filterEmptyVal = (resJson: TargetObjType): TargetObjType => {
  const obj: any = Array.isArray(resJson) ? [] : {}
  for (const [k, v] of Object.entries(resJson)) {
    // handle undefined or null
    if (!(v === undefined || v === null))
      obj[k] = typeof v === 'object' ? filterEmptyVal((v as TargetObjType)) : v
  }

  return obj
}

export default filterEmptyVal

