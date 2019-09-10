import path from './config'
import apiCall from './apiCall'

export default {
    getWeatherDetails ( callback, fail, param ) {
        apiCall.makeGetRequest(path.api.weather, callback, fail, param)
    }
}