app.component('header-display', {
    props: {
        title: String,  
    },
    
    template:
    /*html*/
    `<header>
        <h1>{{ title }}</h1>
        <button-display 
        @btn-click="$emit('toggle-add-task')"
        text="Add Task" 
        color="green" 
        >       
        </button-display>
    </header>
    `
})