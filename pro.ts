interface Task {
    id: number,
    title: string,
    status: string,
    startDate: string,
    endDate: string
}



let Tasks: Task[] = JSON.parse(localStorage.getItem("Task") || '[]')




function ShowTasks() {
    const myDiv = document.getElementById('myDiv') as HTMLDivElement
    myDiv.innerHTML = '';


    Tasks.forEach((task) => {
        const card = document.createElement('div');
        card.className = "TaskCard";
        
        card.innerHTML = `
        <h2>${task.title}</h2>
        <p>${task.status}</p>
        <p>${task.startDate}</p>
        <p>${task.endDate}</p>

        
        <button type="submit" id="edit">Edit</button>
        <button type="submit" id="delete">Delete</button>
        `

        myDiv.appendChild(card);
    })

}








let myForm = document.getElementById('myForm') as HTMLFormElement


myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let id = document.getElementById('myId') as HTMLInputElement
    let title = document.getElementById('title')as HTMLInputElement
    let status = document.getElementById('status') as HTMLInputElement
    let startDate = document.getElementById('sDate') as HTMLInputElement
    let endDate = document.getElementById('eDate') as HTMLInputElement

    const Id = Tasks.length > 0 ? Tasks[Tasks.length - 1].id + 1 : 1;
    const Title = title.value;
    const Status =  status.value;
    const StartDate = startDate.value;
    const EndDate = endDate.value;

    // Create new product object 

    const newTask: Task = {
        id: Id,
        title: Title,
        status: Status,
        startDate: StartDate,
        endDate: EndDate
    }

    Tasks.push(newTask)

    localStorage.setItem('Task', JSON.stringify(Tasks)); // store the array in local storage and then convert it to string

    id.value = '';
    title.value = '';
    status.value = '';
    startDate.value = '';
    endDate.value = '';

    ShowTasks();
    
});

// Display products on page load
document.addEventListener('DOMContentLoaded', () => {
    ShowTasks();
});




