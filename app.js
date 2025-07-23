function hello() {
console.log("Hello there!");
}

class task {

    constructor (title, description, color, startDate, status, budget) {

    this.title = title;
    this.description = description;
    this.color = color;
    this.date = startDate;
    this.status = status;
    this.budget = budget;
}
}

function saveTask() {
    console.log("Hello, I am the saveButton.");
    
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const startDate = $("#selDate").val();
    const status = $("#txtStatus").val();
    const budget = $("#numBudget").val();
this.name = "Xander89"; 
    console.log(title, description, color, startDate, status, budget);
    let data = new task(title, description, color, startDate, status, budget);
    console.log(data);

}


function displayTask(task){
    let render = `<div class="task">
                <div class="info">
                <h4> ${task.title}</h4>
                <p> ${task.description}</p>
                </div>
                <label class="status">${task.status}</label>
                <div class="date-budget">
                <label> ${task.date}</label>
                <label> ${task.budget}</label>
                </div>
                </div>`;
    $(".list").append(render);
}
function init() {
    console.log("Hello, I am the init.");
    $("#btnSave").click(saveTask);
    $("#btnSave").click(displayTask);

}

window.onload = init; 