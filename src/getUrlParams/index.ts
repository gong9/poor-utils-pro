import type { TargetObjType } from '../types'

/**
 * Get url params
 * Solved some problems eg: the url param contains '=' and reject hash
 * @param url
 */
const getUrlParams = (url: string) => {
  const needHandleString = url.split('?')[1] || ''

  let searchPartArr

  if (needHandleString.includes('#'))
    searchPartArr = needHandleString.split('#')[0].split('&')

  else
    searchPartArr = needHandleString.split('&')

  return searchPartArr.reduce((pre: TargetObjType, cur: string) => {
    const curKey = cur.split('=')[0]
    const value = cur.replace(`${curKey}=`, '')

    curKey && (pre[curKey] = value)
    return pre
  }, {})
}

export default getUrlParams

