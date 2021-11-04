window.onload = () => {
	let submitForm = document.querySelector(".submitForm");
	submitForm.addEventListener("click", addTodo);
};

function addTodo(e) {
	e.preventDefault();

	let listOfTodos = document.querySelector(".listOfTodos");
	let userInput = document.querySelector(".userInput");

	let todoContainer = document.createElement("div");
	todoContainer.classList.add("todo-containter");

	let createTodoLi = document.createElement("li");
	createTodoLi.innerText = userInput.value;
	createTodoLi.classList.add("todo-li");
	userInput.value = "";

	let removeButton = document.createElement("button");
	removeButton.innerText = "Remove Todo";
	removeButton.classList.add("remove-btn");
	removeButton.addEventListener("click", deleteTodo);

	createTodoLi.appendChild(removeButton);
	todoContainer.appendChild(createTodoLi);
	listOfTodos.appendChild(todoContainer);

	function deleteTodo() {
		let todo = createTodoLi.parentElement;
		todo.classList.add("removed");
		todo.remove();
	}
}
