"use strict";
const todos = readTodos();
function writeTodos() {
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
    const todosStorage = localStorage.getItem('todos-storage');
    if (todosStorage) {
        const json = JSON.parse(todosStorage);
        return json;
    }
    else {
        return [];
    }
}
