<template>
    <div class="main">
        <ul>
            <router-link to="/"><li><h1> Menu </h1></li></router-link>
            <router-link to='/todo'><li class="items"> Todo </li></router-link>
            <li class="items"> Page2 </li>
            <li class="items"> page3 </li>
        </ul>
    </div>
</template>

<script src="./SideBar.js"></script>

<style scoped>
.main {
    left: 8px;
    float: left;
    width: 100%;
    background-color: gray;
    color: white;
    height: 100%;
    display: none;
    align-self: center;
}
.main ul {
    width: 100%;
    margin: 0;
    padding: 0;
}
.main li {
    padding: 10px;
    display: block;
    text-align: center;
    text-decoration-style: none;
}
.main li:hover {
    color: grey;
    background-color: white;
}
</style>