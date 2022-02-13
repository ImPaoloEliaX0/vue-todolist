
const root = new Vue (

    {
        el:'#app',
        data: {
            newtodo:'',
            todos: [

                {
                    testo:'lavorare al pc',
                    line:false,

                },
                {
                    testo:'bere',
                    line:false,
                   

                },
                {
                    testo:'studiare',
                    line:false,

                },
                {
                    testo:'cantare',
                    line:false,

                },
            ],
        
        },
        methods: {
            addTodo() {
                this.todos.push({
                    testo:this.newtodo,
                    line:false,
                });
                this.newtodo = '';
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            
            },
            check(index) {
                this.todos[index].line = !this.todos[index].line
    
            },

        },
    }

);