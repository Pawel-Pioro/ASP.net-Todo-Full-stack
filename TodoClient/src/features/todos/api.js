import api from "@/lib/api-client";

export const getTodos = () => api('/TodoItems')

export const createTodo = (name) => api('/TodoItems', { method: 'POST', body: JSON.stringify({ name, isComplete: false }) })

export const updateTodo = (todo) => api(`/TodoItems/${todo.id}`, { method: 'PUT', body: JSON.stringify(todo) })

export const deleteTodo = (id) => api(`/TodoItems/${id}`, { method: 'DELETE' })