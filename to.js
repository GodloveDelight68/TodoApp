/* 3. 
  - add the new todo as a new list item using a function
   -inject it into the UL, by referencing the UL and, 
   -get the list and append a new html using innerHTML
 */
const list = document.querySelector('.todos');
// search
const search = document.querySelector('.search input');

const generateTemplate = function(todo){
    const html = ` 
    <li class="list-group-item d-flex justify-content-between align-itens-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
      </li>
      `; 

      list.innerHTML += html;

};



/* 1. all about the add new todo section
  -reference the class
  -add submit event and prevent the default action
*/
const addForm = document.querySelector('.add');
addForm.addEventListener('submit', function(e){
     e.preventDefault();
   
     // 2. get what the user types & remove spaces using(.trim) method
   const todo = addForm.add.value.trim();

/*   4.
prevent addition of todo if nothing is typed and it is submitted'
 using the .length method which takes into consideration that,
  no input added has length 0 and does no action
  using the .reset method to reset the typing field after submission
   */
 if(todo.length){
    // call function generateTemplate
    generateTemplate(todo);
    addForm.reset();
   }
     
});

// deleting todos
// 5.
// adding an eventListener to the UL
list.addEventListener('click', function(e){
    // verifies if it is the trash that is clicked by, verifying what
    // if the class delete is contained
    // deleteting the parent element of the delete class if true
     if(e.target.classList.contains('delete')){
            e.target.parentElement.remove();
     }
});

//   searching todos

// 2. // write a function that will take the term and match it will 
       // the terms found in the todo list
       const filterTodos = function(term){
        // filter the todos and apply classes to the one which don't have a match 
// using the filter method, but we must reference the todos
        // convert to an array 
        Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));


        Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
       
    };
         
       
       


//1.
// keyup event
// reference on the input field
 // add an eventlistener 
 search.addEventListener('keyup', function(){
       // get the term that the user types in in time
       const term = search.value.trim().toLowerCase();

       // call the funtion filterTodo
       filterTodos(term);

 });












