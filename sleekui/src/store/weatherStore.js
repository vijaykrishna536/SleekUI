import api from '@/api/allApi'

export default {
    state : { 
        weatherReport: {},
    },
    getters : {
        getWeatherReport (state) {
            return state.weatherReport
        },
        getError (state) {
            return state.error
        }
    },
    mutations : {
        setWeatherReport (state, value) {
            state.weatherReport = value
        },
        setError (state, value) {
            state.error = value
        }
    },
    actions : {
        GET_WEATHER_REPORT ( {commit}, {params, success , fail} ) {
            api.getWeatherDetails ((response) => {
                if (response.status==200) {
                    commit('setWeatherReport',response.data)
                    success ()
                }
            }, (error)=> {
                console.log(error)
                fail ()
            }, params)
        }
    }
}