interface TargetObjType {
  [propName: string]: unknown
}

/**
 * FilterEmptyVal [include undefined or null]
 *
 * @param {object} resJson
 */
const filterEmptyVal = (resJson: TargetObjType) => {
  const obj: any = Array.isArray(resJson) ? [] : {}
  for (const [k, v] of Object.entries(resJson)) {
    // handle undefined or null
    if (!(v === undefined || v === null))
      obj[k] = typeof v === 'object' ? filterEmptyVal((v as TargetObjType)) : v
  }

  return obj
}

export default filterEmptyVal

