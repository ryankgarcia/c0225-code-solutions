"use strict";
const todos = [];
function writeTodos() {
    debugger;
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
    debugger;
    const todosStorage = localStorage.getItem('todos-storage');
    if (todosStorage) {
        const json = JSON.parse(todosStorage);
        return json;
    }
    else {
        return [];
    }
}
