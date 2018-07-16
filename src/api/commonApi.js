import http from '../utils/httpConfig.js'

class commonApi {
    getDataSuccess (params) {
        return http.get('/api',params)
    }
    getDataError (params) {
        return http.get('/api/123aaa',params)
    }
    getMovie (params) {
        return http.get('/api/getMovie', params)
    }
}

export default new commonApi()