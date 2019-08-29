<template>
    <div class="main" v-pre>
        <img src="@/assets/CmpLogo.png" alt="Company Logo">
        <h1> BABA COMPUTERS PVT. LIMITED </h1>
        
    </div>
</template>

<script src="./Head.js"></script>

<style scoped>
.main {
    background-color: black;
    bottom: 0px;
    border: black 2px solid;
    width: 100%;
    position: flex;
}

.main h1 {
    color: honeydew;
    flex: 1;
}
.main img {
    width: 15%;
    height: 15%;
    max-width: 100%;
    max-height: 100%;
}
</style>