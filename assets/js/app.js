const app = new Vue({
    el: "#root",
    data: {
        logoImg: "https://www.boolean.careers/images/misc/logo.png",
        newTask: "",
        error: false,
        tasks: [
            "Fare i compiti",
            "Fare la spesa",
            "Fare il bucato"
        ]

    },
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },

        addNewTask() {
            //console.log("add task");
            //console.log(this.newTask);

            if (this.newTask.length > 5) {
                this.tasks.push(this.newTask);
                this.error = false;
            } else {
                // console.log("error");
                this.error = true;
            }
            this.newTask = "";
        }
    }
})