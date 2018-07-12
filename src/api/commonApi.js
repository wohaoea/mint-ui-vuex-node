import http from '../utils/httpConfig.js'

class commonApi {
    getDataSuccess (params) {
        return http.get('/',params)
    }
    getDataError (params) {
        return http.get('/123aaa',params)
    }
}

export default new commonApi()