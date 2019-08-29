<template>
    <div class="main">
        <section class="head">
            <Head></Head>
        </section>
        <section class="sidebar">
            <SideBar></SideBar>
        </section>
        <section class="child">
            <h1> This is the main page we're working on </h1>
            <router-view> </router-view>  
        </section>
        <section class="foot">
            <Foot></Foot>
        </section>
    </div>
</template>

<script src="./LandingPage.js"></script>

<style scoped>
.main {
    display: flex;
    flex-flow: row wrap;
}
.head {
    width: 100%;
    align-self: flex-start;
}
.sidebar {
    align-self: center;
    height: 500px;
    flex-grow: 1;
}
.child {
    align-self: center;
    height: 500px;
    flex-grow: 3;
}
.foot {
    width: 100%;
    align-self: flex-end;
}
</style>