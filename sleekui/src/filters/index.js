import Vue from 'vue'

Vue.filter('UCase',function(value){
    if(typeof(value)==='string') {
        return value.toUpperCase()
    } else {
        return value
    }
})

Vue.filter('LCase', (value) => {
    if(typeof(value)==='string') {
        return value.toLowerCase()
    } else {
        return value
    }
})

Vue.filter('KtoC', (value)=>{
    if(typeof(value)==='boolean'||typeof(value)==='number') {
        return Math.round((value-273.15)*100)/100
    } else {
        return 0
    }
})

Vue.filter('MoneyFormatter', (value)=> {
    if(typeof(value)==='number') {
        return (' ' + value).replace(
            /(\d)(?=(?:\d{3})+(?:\.|$))|(\.\d\d?)\d*$/g, 
            function(m, s1, s2){
              return s2 || (s1 + ',');
            }
        );
    }
})