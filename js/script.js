//check if DOM is added
document.addEventListener('DOMContentLoaded', ()=>{

    // use a submit event to fetch the 
// let submitButton = document.getElementById('submit-button')

// console.log(submitButton)

// submitButton.addEventListener('click', (event) =>{
//     event.preventDefault()//prevents the default behaviour
//     console.log(event)//pass event object
// })
// //how select the form
// })

let form = document.querySelector('form')
let todoList =document.getElementById('todo-list')

 //get data from the server in JS using fetch API after creating JSON file
fetch(`http://127.0.0.1:5000/todos`)
.then(res => res.json())
// .then(data => console.log(todos[0].title))//gives us one title
.then(todos => {
    todos.forEach(todo => {
        let listItem = document.createElement('li')
        listItem.innerText = `Title: ${todo.title} ID: ${todo.id}`
        todoList.appendChild(listItem)
        
    });
})
//the data is on the console, now display out todos in the DOM

form.addEventListener('submit', (e) =>{

    e.preventDefault()
    let inputElem = document.getElementById('todo-text')//get value

    console.log(inputElem.value)//display value

    //put the value in the todo list
    
    
    //create the list item
    let listItem = document.createElement('li')
    //console.log(listItem)//the list is empty
    listItem.innerText = inputElem.value//the text that will be inside the list to be from the textbox input
    //add it to the DOM through .appendChild()
    todolist.appendChild(listItem)//add a child which is an element listItem(the new list item to the existing item)
    //here the data is not persistence...create JSON server to store the data
    //get data from the server in JS using fetch API


})
})