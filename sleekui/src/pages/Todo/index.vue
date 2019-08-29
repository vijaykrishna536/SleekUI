<template >
    <div>
        <div class="main">
            <h1 class="heading" v-once>{{title}}</h1>
            <h3 class="heading">{{title}}</h3>
            <span>
                <input type="text" v-model="todoitem" v-on:keypress="change()" v-on:keyup.enter="addTask()" v-on:click="change()">
                <button class="addButton" v-on:click="addTask()"> Add </button>
                <button class="addButton" @click="changeHeading()">Change SubHeading </button>
            </span>
            <div class="error" v-if="isEmpty"> <h6> Required </h6> </div>
            <div class="green" v-else> <h6> Good going man !! </h6> </div>
            <ul>
                <li v-for="(todo,index) in todolist" :key="index">
                    {{ todo }} 
                    <button v-on:click="deleteTask(todo)" class="done"> Done</button>
                </li>
            </ul>
            <div v-show="history!=''" v-cloak>
                <div v-html="html"></div>
                <textarea class="textarea" v-text="history" readonly>
                </textarea>
                <section>
                    <button @click="clearHistory()"> Clear History </button>
                </section>
            </div>
            <h6 class="heading" v-pre> @copyright do not try and imitate</h6>        
        </div>
    </div>    
</template>
 
<script src="./Todo.js">
</script>


<style scoped>
.main{
    margin: auto; 
    border: 3px solid coral;
    padding: 10px;
    width: 60%;
    border-radius: 30px;
}

.error h6 {
    color: red;
    margin-top: 2px;
    margin-bottom: 2px;
}
.green h6 {
    color: green;
    margin-top: 2px;
    margin-bottom: 2px;
}

.addButton {
    background-color: coral;
    margin-left:12px;
    border-radius: 3px;
}

.done{
    background-color: coral;
    border-radius: 3px;
}

.heading{
    background-color: coral;
    width: 97%;
    padding: 10px;
    border-radius: 3px;
    text-align: center;
    
}

.main ul{
    list-style-type: none; 
}

.navigation button{
    margin-top: 15px;
    padding: 5px;
    width: 8%;   
}

.textarea {
    width: 50%;
    height: 60px;
}

[v-cloak] >* {display: none;}
[v-cloak]::before {content: "loading...";}
</style>