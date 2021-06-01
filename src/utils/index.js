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

/**
 * @description 生成OptionList
 * @param { object } status 英文键名和值的映射对象
 * @param { object } statusMap 状态和中文的映射对象
 * @returns { array } tempOptionsList 根据status和statusMap，返回一个生成好的新数组
 * @example [{ id: 0, name: '正常' }, { id: 1, name: '保留' }, { id: 3, name: '删除' }]
 */
 export function genOptionList(status, statusMap) {
  const tempOptionsList = []
  for (const key in status) {
    const id = status[key]
    const name = statusMap[id]
    tempOptionsList.push({ id, name })
  }
  return tempOptionsList
}
