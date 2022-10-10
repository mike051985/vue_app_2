const app = Vue.createApp({
    data() {
        return {
            tasks: []
        }
    },
    methods: {
        deleteTask(id) {
            if (confirm('Are you sure?')) {
                this.tasks = this.tasks.filter((task) => task.id !== id)
            } 
        },
        toggleReminder(id) {
            this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
        }
    },
    created() {
        this.tasks = [
            {
                id: 1,
                text: "Meeting with Friends",
                day: "October 15th at 14:00",
                reminder: true
            },
            {
                id: 2,
                text: "Play basket ball",
                day: "October 23th at 19:00",
                reminder: true
            },
            {
                id: 3,
                text: "Dinner with Friends",
                day: "October 30th at 20:00",
                reminder: false
            }   
        ]
    }
})