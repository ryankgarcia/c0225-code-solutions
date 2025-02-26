/* exported todos, writeTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

const todos: Todo[] = [];

function writeTodos(): void {
  debugger;
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): Todo[] {
  debugger;
  const todosStorage = localStorage.getItem('todos-storage');
  if (todosStorage) {
    const json = JSON.parse(todosStorage);
    return json;
  } else {
    return [];
  }
}
