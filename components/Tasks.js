app.component('tasks', {
    props: {
        tasks: Array
    },
    template:
    /*html*/
    `<div 
    :key="task.id" 
    v-for="task in tasks">
        <task 
            @toggle-reminder="$emit('toggle-reminder', task.id)" 
            @delete-task="$emit('delete-task', task.id)" 
            :task="task"
        >
        </task>
    </div>
    `,
    emits: ['delete-task', 'toggle-reminder']
})