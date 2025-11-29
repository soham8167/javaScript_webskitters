const taskInput = document.getElementById('i')
const addBtn = document.getElementById('btn')
const taskList = document.getElementById('taskList')



let tasks= JSON.parse(localStorage.getItem("tasks"))|| "[]";
renderTask()



let handleClick = ()=>{
    let text = taskInput.value.trim();
if(!text){
    alert("Enter a task")
        return;
    
}
tasks.push({text, completed:false});
taskInput.value="";
saveTask();
renderTask()
}

function renderTask(){
    taskList.innerHTML='';
    tasks.forEach((task, index )=> {
        let li = document.createElement("li")
        if(task.completed){
            li.classList.add("completed")
        }
            li.innerHTML=`
            <span class="task-text">${task.text}</span>
            <button class="delete-btn">X</button>
            `;
            li.querySelector(".task-text").addEventListener("click", () => {
            task.completed = !task.completed;
            saveTask();
            renderTask();
        });
        
        li.querySelector('.delete-btn').addEventListener("click", () =>{
            tasks.splice(index,1)
            saveTask();
            renderTask()
        })


        taskList.appendChild(li);
    });
}

function saveTask(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

window.handleClick = handleClick;