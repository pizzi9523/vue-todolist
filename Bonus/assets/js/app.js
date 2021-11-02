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
        ],
        tasksComplete: [

        ],
        tasksTrashed: [

        ]

    },
    methods: {


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
        },

        modifyTask(index) {
            console.log(index);
            let modifica = prompt("Modifica la tua task")
            this.tasks.splice(index, 1, modifica)
        },

        deleteTask(task, index) {
            //this.tasks.splice(index, 1);
            this.tasksTrashed.push(task)
            this.tasks.splice(index, 1);
        },

        addTaskCompleted(task, index) {
            this.tasksComplete.push(task)
            this.tasks.splice(index, 1);
        },

        undoComplete(task, index) {
            //console.log(this.tasks);
            this.tasks.push(task)
            this.tasksComplete.splice(index, 1);
        },

        restoreTrashed(task, index) {
            this.tasks.push(task)
            this.tasksTrashed.splice(index, 1);
        },

        permanentlyDelete() {
            let verifyChoice = prompt("Sei sicuro di eliminare definitivamente? [s/n]");

            if (verifyChoice == "s") {
                this.tasksTrashed.splice(0, this.tasksTrashed.length)
            }
        }
    }
})