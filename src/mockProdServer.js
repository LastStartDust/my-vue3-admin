import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import userMock from '../mock/api/user'
import goodsMock from '../mock/api/goods'

export function setupProdMockServer() {
  console.log('mock 启动');
  createProdMockServer([...userMock, ...goodsMock])
}