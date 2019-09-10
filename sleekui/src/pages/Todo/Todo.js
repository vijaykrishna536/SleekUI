export default {
    name: 'Todo',
    data () {
        return {
            todoitem: '',
            isEmpty: false,
            todolist: [],
            history: '',
            count:1, 
            html:"<h3 v-pre> History </h3>",
            title:'To Do List',
            all:''
        }
    },
    methods:{
        addTask : function () {
            if(this.todoitem!=='') {
                let word=this.history
                this.todolist.push(this.todoitem);
                this.history= word.concat(this.count+". "+this.todoitem+", ");
                this.count++;
                this.clearBox();
                this.change();
            } else {
                this.isEmpty=true;
            }
        },
        deleteTask : function (todo) {
            this.todolist.splice(this.todolist.indexOf(todo),1);
        },
        clearBox () {
            this.todoitem='';
        },
        change () {
            if(this.isEmpty==true) {
                this.isEmpty=false;  
            }         
        },
        clearHistory () {
            this.history=''
            this.count=1
        },
        changeHeading () {
            if(this.title=="To Do List") {
                this.title="Well you've changed the title but look heading is still same"
            } else {
                this.title="To Do List"
            }
        }
    }
}  
