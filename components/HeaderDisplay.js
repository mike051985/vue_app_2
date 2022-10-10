app.component('header-display', {
    props: {
        title: String
    },
    template:
    /*html*/
    `<header>
        <h1>{{ title }}</h1>
        <button-display text="Add Task" color="green"></button-display>
    </header>
    `
})