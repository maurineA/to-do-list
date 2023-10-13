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

form.addEventListener('submit', (e) =>{

    e.preventDefault()
    let inputElem = document.getElementById('todo-text')//get value

    console.log(inputElem.value)//display value

    //put the value in the todo list
    let todolist =document.getElementById('todo-list')
    
    //create the list item
    let listItem = document.createElement('li')
    //console.log(listItem)//the list is empty
    listItem.innerText = inputElem.value//the text that will be inside the list to be from the textbox input
    //add it to the DOM through .appendChild()
    todolist.appendChild(listItem)//add a child which is an element listItem(the new list item to the existing item)
    //here the data is not persistence...create JSON server to store the data


})
})