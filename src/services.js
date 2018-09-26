import axios from 'axios'
import { Indicator, MessageBox } from 'mint-ui'

const ajax = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/86102/api/v1'
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
  return ajax.get('/home/list')
}
