import {mapActions, mapGetters} from 'vuex'

export default {
    name:'Weather',
    data () {
        return {
            isCity:false,
            error:false,
            city:'',
            cities:['Patna','Gaya','London','Mumbai','Bangalore']
        }
    },
    methods : {
        ...mapActions ([
            "GET_WEATHER_REPORT"
        ]),
        fetchDetails () {
            this.$store.dispatch('GET_WEATHER_REPORT', { params: this.city, success: this.success, fail: this.failure })
        },
        success () {
            this.isCity=true;
            this.error=false;
        },
        failure () {
            this.error=true;
        },
        clean () {
            this.isCity=false,
            this.city=''
        },
        extractTemprature () {
            return (Math.round((this.getWeatherReport.main.temp-273.15)*100)/100);
        },
        extractTime (value) {
            if(value=='SR') {
                return new Date(this.getWeatherReport.sys.sunrise).toTimeString();
            } else {
                return new Date(this.getWeatherReport.sys.sunset).toTimeString();
            }
        },
        extractPressure () {
            return Math.round(this.getWeatherReport.main.pressure)/100;
        }

    },
    computed : {
        ...mapGetters ([
            'getWeatherReport',
        ])    
    },
}