import axios from 'axios'
import util from './apiUtils'
import VueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(VueResource);

export default {
    makeGetRequest (path, callback, fail, param) {
        Vue.http.get(`${path}?q=${param}&appid=${util.keys.weatherKey}`)
            .then(callback)
            .catch(fail)
    }
}