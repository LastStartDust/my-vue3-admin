/**
 * @param {string} url
 * @returns {Object}
 */
 export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

export function isEmpty(v) {
  if(typeof v === 'object') {
    if(Array.isArray(v)) {
      return v.length
    } else {
      return Object.keys(v).length
    }
  }
  return v === undefined || v === null || v === ''
}

export function parsePath(url) {
  if(isEmpty(url)) {
    return -1
  }

  let id = 1
  id = (url.slice(url.lastIndexOf('/') + 1))
  return id
}

export function isNum(v) {
  return !isNaN(v)
}

export function getArrRandomCount(arr, len) {
  if(Array.isArray(arr)) {
    const randomLen = Math.ceil(Math.random() * arr.length);
    const tempArr = arr.slice(0, randomLen)
    return tempArr
  } else {
    return []
  }
}

export const SUCCESS_CODE = 0
export const ERROR_CODE = -1

