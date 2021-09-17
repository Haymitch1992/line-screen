import {LOGIN, ROUTES,STATION_INFO,GET_GUIDE_INFO,TRAIN_INFO} from '@/services/api'
import {request, METHOD, removeAuthorization} from '@/utils/request'
/**
 * 登录服务
 * @param name 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function login(name, password) {
  return request(LOGIN, METHOD.POST, {
    name: name,
    password: password
  })
}

// 获取ATS 静态数据
export async function stationInfo(deviceId,direction,station) {
  return request(STATION_INFO, METHOD.GET, {
    deviceId: deviceId, // 设备ID
    direction:direction, // 上下行
    station: station, // 车站ID
  })
}
// 获取ATS 动态数据
export async function trainInfo(deviceId,direction,station) {
  return request(TRAIN_INFO, METHOD.GET, {
    deviceId: deviceId, // 设备ID
    direction:direction, // 上下行
    station: station, // 车站ID
  })
}

export async function getRoutesConfig() {
  return request(ROUTES, METHOD.GET)
}

export async function agsagsInfo() {
  return request(GET_GUIDE_INFO, METHOD.GET, {
    device_id: 'ZHJZP-1', // 设备ID
  })
}
/**
 * 退出登录
 */
export function logout() {
  localStorage.removeItem(process.env.VUE_APP_ROUTES_KEY)
  localStorage.removeItem(process.env.VUE_APP_PERMISSIONS_KEY)
  localStorage.removeItem(process.env.VUE_APP_ROLES_KEY)
  removeAuthorization()
}
export default {
  login,
  logout,
  getRoutesConfig,
  stationInfo,
  agsagsInfo
}
