import axios from 'axios'
import { Indicator, MessageBox } from 'mint-ui'

const ajax = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock'
})

ajax.interceptors.request.use(config => {
  Indicator.open({
    text: '正在加载数据',
    spinnerType: 'fading-circle'
  })
  return config
})

ajax.interceptors.response.use(resp => {
  const msg = resp.data.err || '未知错误'
  Indicator.close()
  if (!resp.data.code === 200) {
    MessageBox('提示', msg)
    return false
  }
  return resp.data.data
})

export const getHomeList = () => {
  return ajax.get('/86102/api/v1/home/list')
}

export const getCateList = () => {
  return ajax.get('/86102/api/v1/category/list')
}

export const getList = () => {
  return ajax.get('/86466/api/list')
}
export const getsortList = (payload) => {
  const {
    type,
    brand,
    sort,
    sorttype
  } = payload
  return ajax.get(`/86466/api/list?type=${type}&brand=${brand}&sort=${sort}&sorttype=${sorttype}`)
}
