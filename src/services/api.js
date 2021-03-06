//跨域代理前缀
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
const BASE_URL = process.env.VUE_APP_API_BASE_URL
module.exports = {
  LOGIN: `${BASE_URL}/login`,
  ROUTES: `${BASE_URL}/routes`,
  STATION_INFO: `${BASE_URL}/api/v1/device/platform_other/station_info`,
  TRAIN_INFO: `${BASE_URL}/api/v1/device/platform_other/train_info`,
  GET_GUIDE_INFO: `http://10.252.187.11:80/api/v1/device/platform_ags/guide_info`,
}
