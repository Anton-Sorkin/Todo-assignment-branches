class Todo {
	constructor(todoTitle, todoContent) {
		this.todoTitle = todoTitle;
		this.todoContent = todoContent;
	}
}
window.onload = function () {
	let sumbitButton = document.querySelector("#submitInput");
	sumbitButton.addEventListener("click", createTodo);
};

function createTodo(e) {
	e.preventDefault();

	const filterOption = document.querySelector(".filter-todo");
	filterOption.addEventListener("click", filterTodo);

	const todoList = document.querySelector(".todo-list");
	todoList.addEventListener("click", deleteCheck);

	let userTitleInput = document.querySelector("#userInputTitle");
	let userContentInput = document.querySelector("#userInputContent");

	title = userTitleInput.value;
	content = userContentInput.value;

	let todo = new Todo(title, content);

	let todos = [];
	todos.push(todo);

	userTitleInput.value = "";
	userContentInput.value = "";

	let todoContainer = document.createElement("li");
	todoContainer.className = "todo-Container";

	for (let i = 0; i < todos.length; i++) {
		let header = document.createElement("h3");
		let content = document.createElement("span");
		const completed = document.createElement("button");
		const remove = document.createElement("button");

		header.innerHTML = todos[i].todoTitle;
		content.innerHTML = todos[i].todoContent;
		completed.innerText = "#";
		remove.innerText = "#";

		header.className = "todo-Title";
		content.className = "todo-Content";
		completed.classList.add("todo-Complete");
		remove.classList.add("todo-Remove");

		todoContainer.appendChild(header);
		todoContainer.appendChild(content);
		todoContainer.appendChild(completed);
		todoContainer.appendChild(remove);
	}

	function deleteCheck(e) {
		const item = e.target;

		if (item.classList[0] === "todo-Remove") {
			let todo = item.parentElement;
			todo.classList.add("removed");
			todo.remove();
		}
		if (item.classList[0] === "todo-Complete") {
			let todo = item.parentElement;
			todo.classList.add("completed");
		}
	}

	todoList.appendChild(todoContainer);
	document.querySelector("footer").appendChild(todoList);
}
