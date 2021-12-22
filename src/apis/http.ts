import axios, { AxiosRequestConfig, Method } from 'axios'

import { API_SERVER } from '../constants'

const http = axios.create({ baseURL: `${API_SERVER}/api` })

const request = (method: Method, url: string, options: AxiosRequestConfig) => {

  return http
    .request({
      ...options,
      method,
      url,
      headers: {
        ...options.headers,
      }
    })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      const response = err.response
      const data = response?.data

      // eslint-disable-next-line no-throw-literal
      throw {
        ...data,
        message: data?.message || 'Network Error!'
      }
    })
}

const Http = {
  get(url: string, params: AxiosRequestConfig["params"] = {}, headers: AxiosRequestConfig["headers"] = {}) {
    return request('GET', url, { params, headers })
  },
  post(url: string, body: AxiosRequestConfig["data"] = {}, headers: AxiosRequestConfig["headers"] = {}) {
    return request('POST', url, { data: body, headers })
  },
  put(url: string, body: AxiosRequestConfig["data"] = {}, headers: AxiosRequestConfig["headers"] = {}) {
    return request('PUT', url, { data: body, headers })
  },
  patch(url: string, body: AxiosRequestConfig["data"] = {}, headers: AxiosRequestConfig["headers"] = {}) {
    return request('PATCH', url, { data: body, headers })
  },
  delete(url: string, body: AxiosRequestConfig["data"] = {}, headers: AxiosRequestConfig["headers"] = {}) {
    return request('DELETE', url, { data: body, headers })
  }
}

export default Http
