app.component('button-display', {
    props: {
        text: String,
        color: String
    },
    template:
    /*html*/
    `<button @click="onClick()" 
    :style="{ background: color }" 
    class="btn">
    {{ text }}
    </button>
    `,
    methods: {
        onClick() {
            console.log('click')
        }
    }
})