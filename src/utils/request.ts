import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import { ElMessage } from 'element-plus'
enum RequstEnum {
  TIMEOUT = 20 * 1000,
  SUCCESS = 200
}
export interface ResultData<T> {
  code: number
  msg: string
  data?: T
}
const URL: string = ''
const config = {
  url: URL,
  timeout: RequstEnum.TIMEOUT,
  withCredentials: true
}
class ResquestHttp {
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token')
        config.headers.Authorization = token
        return config
      },
      async (error: AxiosError) => {
        return await Promise.reject(error)
      }
    )
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response
        if (data.status === RequstEnum.SUCCESS) {
          return Promise.reject(data)
        }
        return data
      },
      (error: AxiosError) => {
        const { response } = error
        if (response?.status != null) {
          this.handlerCode(response.status)
        }
      }
    )
  }

  private handlerCode(code: number): void {
    switch (code) {
      case 401:
        ElMessage.error('登录失败,请重新登录')
        break
      default:
        ElMessage.error('请求失败')
        break
    }
  }

  // 常用方法封装
  async get<T>(
    url: string,
    params?: Record<string, any>
  ): Promise<ResultData<T>> {
    return await this.service.get(url, { params })
  }

  async post<T>(
    url: string,
    params?: Record<string, any>
  ): Promise<ResultData<T>> {
    return await this.service.post(url, params)
  }

  async del<T>(
    url: string,
    params?: Record<string, any>
  ): Promise<ResultData<T>> {
    return await this.service.get(url, { params })
  }
}

export default new ResquestHttp(config)
