// 空值
export function isEmpty(v) {
  if (v === '' || v === undefined || v === null) {
    return true
  }

  if (typeof v === 'object') {
    if (Array.isArray(v)) {
      return v.length === 0
    } else {
      return Object.keys(v).length === 0
    }
  }
  return false
}

// 请求成功业务码
export const SUCCESS_CODE = 0
