var todo=[]
var input=document.getElementById("input")
var button=document.getElementById("button")
var toDos=document.getElementById("todolist")

button.onclick=addTasks

function addTasks(){
    todo.push(input.value)
    input.value=""
    displayList()
}

function displayList(){
    toDos.innerHTML=" "
    todo.forEach(function(item,index){
        toDos.innerHTML+="<li>" + item + "<a onclick='edit(" + index + ")'> Edit </a>" + 
        "<a onclick='delete_(" + index + ")'> &times &nbsp </a>" + "</li>"
    })
}

function edit(index){
    var updatedTask=prompt("Kindly update the task here.")
    todo.splice(index,1,updatedTask)
    displayList()
}

function delete_(index){
    todo.splice(index,1)
    displayList()
}

