<template>
    <div>
        <div class="main">
            <h1> Weather App</h1>
            <h4>Know what your city's weather upto in seconds...</h4>
            Select City 
            <select class="search" v-model="city" @change="fetchDetails()" >
                <option v-for="(city,index) in cities" :key="index"> {{city}} </option>
            </select>
            <div v-show="error" class="error"> Oops! Something went wrong!! </div>
            <div v-if="isCity" class="details">             
                <div>Temperature : <span>{{ getWeatherReport.main.temp | KtoC }} C</span></div>
                <div>Humidity : <span>{{ getWeatherReport.main.humidity }} %</span></div>
                <div>Pressure : <span>{{ extractPressure() }} BAR </span></div>
                <div>Sunrise : <span>{{ extractTime('SR') }} AM</span></div>
                <div>Sunset : <span>{{ extractTime('SS') }} PM</span></div>
                <div>Wind Speed : <span>{{ getWeatherReport.wind.speed }} mph </span></div>
                <div>Visibility : <span>{{ getWeatherReport.visibility }} meters </span></div>
            </div>
            <div>
                <button @click="clean()"> Clear </button>
            </div>
        </div>
    </div>
</template>

<script src="./Weather.js"></script>

<style type="text/css" scoped>
.main{
    margin: auto; 
    border: 3px solid #73AD21;
    padding: 10px;
    width: 50%
}
.main h1 {
    margin-bottom: 1px; 
}
.main h4 {
    margin-top: 1px; 
}
.main input {
    margin-bottom: 5px;
}
.details span {
    width:10%;
}
.search {
    margin-left:10px;
}
.error {
    color: red;
    font-size: 10px;
}
.navigation button{
    margin-top: 15px;
    padding: 5px;
    width: 8%;   
}
</style>