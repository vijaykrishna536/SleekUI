<template>
    <div class="main">
        <h1> GUESS THE NUMBER </h1>
        <h4> and win prizes...</h4>
        <div class="input"> 
            Guess the Number (0-9) :
            <input v-model="GuessedNumber" 
                @keyup.enter="Check()" 
                pattern="^[0-9]$"
            />   
        </div>
        <div class="message">
            <textarea v-model="Message" readonly></textarea>
        </div>
        <div class="button">
            <button @click="Clean()">Clear</button>
            <button @click="Shuffle()">Shuffle</button>
        </div>
    </div>
</template>

<script src="./NumberGuessing.js"></script>

<style scoped>
.main{
    margin: auto; 
    border: 3px solid  #73AD21;
    padding: 10px;
    width: 40%;
    border-radius: 30px;
}
.main h1 {
    margin-bottom: 1px; 
    width: 100%;
}
.main h4 {
    margin-top: 1px; 
    width: 100%;
}
.input {
    width:100%;
}
.message {
    width: 100%;
}
.message textarea {
    margin-top: 15px;
    width: 45%;
}
.button {
    display: block;
    width: 100%;
}
.button button {
    margin-left: 5px;
    margin-right: 5px;
}
</style>