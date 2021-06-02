import url from 'url'
import { match } from 'path-to-regexp';

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

// 解析JSON
export function parseJson(req) {
  return new Promise((resolve) => {
    let body = "";
    let jsonStr = "";
    req.on("data", function(chunk) {
      body += chunk;
    });
    req.on("end", function() {
      try {
        jsonStr = JSON.parse(body);
      } catch (err) {
        jsonStr = "";
      }
      resolve(jsonStr);
      return;
    });
  });
}

// 解析Query
export function parseQuery(req) {
  return new Promise((resolve) => {
    let queryParams = {};
    const isGet = req.method && req.method.toUpperCase() === "GET";
    if (isGet && req.url) {
      queryParams = url.parse(req.url, true)
    }
    const reqUrl = isGet ? queryParams.pathname : req.url
    const urlMatch = match(url, { decode: decodeURIComponent });

    let query = queryParams.query
    if (reqUrl) {
      if (isGet && JSON.stringify(query) === "{}" || !isGet) {
        query = urlMatch(reqUrl).params || {};
      }
    }
    resolve(query)
    return
  })
}

// 解析原始请求
export function parseRawRequest(req) {
  return new Promise(async (resolve) => {
    const body = await parseJson(req)
    const query = await parseQuery(req)
    resolve({
      url: req.url,
      body,
      query,
      headers: req.headers
    })
    return 
  })
}
