var Tasks = JSON.parse(localStorage.getItem("Task") || '[]');
function ShowTasks() {
    var myDiv = document.getElementById('myDiv');
    myDiv.innerHTML = '';
    Tasks.forEach(function (task) {
        var card = document.createElement('div');
        card.className = "TaskCard";
        card.innerHTML = "\n        <h2>".concat(task.title, "</h2>\n        <p>").concat(task.status, "</p>\n        <p>").concat(task.startDate, "</p>\n        <p>").concat(task.endDate, "</p>\n\n        \n        <button type=\"submit\" id=\"edit\">Edit</button>\n        <button type=\"submit\" id=\"delete\">Delete</button>\n        ");
        myDiv.appendChild(card);
    });
}
var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var id = document.getElementById('myId');
    var title = document.getElementById('title');
    var status = document.getElementById('status');
    var startDate = document.getElementById('sDate');
    var endDate = document.getElementById('eDate');
    var Id = Tasks.length > 0 ? Tasks[Tasks.length - 1].id + 1 : 1;
    var Title = title.value;
    var Status = status.value;
    var StartDate = startDate.value;
    var EndDate = endDate.value;
    // Create new product object 
    var newTask = {
        id: Id,
        title: Title,
        status: Status,
        startDate: StartDate,
        endDate: EndDate
    };
    Tasks.push(newTask);
    localStorage.setItem('Task', JSON.stringify(Tasks)); // store the array in local storage and then convert it to string
    id.value = '';
    title.value = '';
    status.value = '';
    startDate.value = '';
    endDate.value = '';
    ShowTasks();
});
// Display products on page load
document.addEventListener('DOMContentLoaded', function () {
    ShowTasks();
});
