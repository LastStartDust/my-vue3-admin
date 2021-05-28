/**
 * 如果你想使用mockJS，可以运行mockXHR()
 * 注意：当前mockXHR模拟数据请求仅在生产环境，请在上线之前移除掉
 */
import defaultSettings from '@/settings'
import { mockXHR } from '../../mock';
console.log(defaultSettings.isUseMock);
if (defaultSettings.isUseMock) {
  console.log(`user mock at ${import.meta.env.MODE} env`)
  // const { mockXHR } = require('../../mock')
  mockXHR()
}
