"use strict";
const todos = readTodos();
function writeTodos() {
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
    const name = localStorage.getItem('todos-storage');
    if (!name === localStorage) {
        todos = JSON.parse();
    }
    else {
        return [];
    }
}
