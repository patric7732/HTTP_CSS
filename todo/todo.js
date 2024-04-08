let basicDatas = [
  { id: 1, title: "Todo 1", done: false },
  { id: 2, title: "Todo 2", done: true },
];

const inputTodo = document.getElementById("inputTodo");
const todoBtn = document.getElementById("todoBtn");
const todoList = document.getElementById("todo-list");

//배열을 불러와서 표시하는 기능
function renderTodos() {
  todoList.innerHTML = "";
  basicDatas.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.id = `todo-item-${todo.id}`;

    // 투두 체크박스 만들기
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.onchange = () => toggleDone(todo.id);

    // 투두리스트 표시
    const label = document.createElement("span");
    label.textContent = todo.title;
    if (todo.done) {
      label.classList.add("done");
    }

    // 삭제 버튼 표시
    const delBtn = document.createElement("button");
    delBtn.textContent = "DELETE";
    delBtn.onclick = () => deleteTodo(todo.id);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.appendChild(delBtn);

    todoList.appendChild(todoItem);
  });
}

// 할 일 추가 함수
function addTodo() {
  const newTitle = inputTodo.value.trim();
  if (!newTitle) {
    alert("할 일을 입력하세요.");
    return;
  }

  const newTodo = {
    id: basicDatas.length
      ? Math.max(...basicDatas.map((todo) => todo.id)) + 1
      : 1, // 새 ID 생성
    title: newTitle,
    done: false,
  };
  basicDatas.push(newTodo);
  renderTodos();
  inputTodo.value = ""; // 입력 필드 초기화
}

function deleteTodo(id) {
  basicDatas = basicDatas.filter((todo) => todo.id !== id);
  renderTodos();
}

function toggleDone(id) {
  const todo = basicDatas.find((todo) => todo.id === id);
  if (todo) {
    todo.done = !todo.done;

    const todoItem = document.getElementById(`todo-item-${id}`);
    const label = todoItem.querySelector("span");

    renderTodos();
  }
}

todoBtn.addEventListener("click", addTodo);
inputTodo.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
renderTodos();
