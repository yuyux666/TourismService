import request from '@/utils/request'

// 根据大景点获取相应小景点
export const SceneAppointListService = (id) =>
  request.get(`/scenic/index/${id}`)

// 根据大景点查询
export const SceneListService = (id) => request.get(`/attractions/scenic/${id}`)

// 按照id查询景点
export const SceneByIdService = (id) => request.get(`/attractions/poi/${id}`)
// 查询具体景点
export const SceneDetailService = (id) =>
  request.get(`/scenic/sight/index/${id}`)

// 查询全部旅游路线
export const TravelRouteListService = () => request.get('/scenic/route/index')

// 查询具体旅游路线
export const TravelRouteDetailService = (id) =>
  request.get(`/scenic/route/index/${id}`)

// 获取具体路况
export const TravelTrafficService = (id) => request.get(`/traffic/${id}`)
