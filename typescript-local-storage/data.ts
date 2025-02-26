/* exported todos, writeTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

const todos: Todo[] = readTodos();

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): void {
  const name = localStorage.getItem('todos-storage');
  if (!name === localStorage) {
    todos = JSON.parse();
  } else {
    return [];
  }
}
