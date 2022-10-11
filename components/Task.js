app.component('task', {
    props: {
        task: Object
    },
    template:
    /*html*/
    `<div 
        @dblclick="$emit('toggle-reminder', task.id)" 
        :class="[task.reminder ? 'reminder' : '', 'task']"
    >
        <h3>
            {{ task.text }}
            <i 
                @click="$emit('delete-task', task.id)" 
                class="fas fa-times"
            >
            </i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
    `
})