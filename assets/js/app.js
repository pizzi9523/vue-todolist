const app = new Vue({
    el: "#root",
    data: {
        tasks: [
            "Fare i compiti",
            "Fare la spesa",
            "Fare il bucato"
        ]

    },
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1)
        }
    }
})