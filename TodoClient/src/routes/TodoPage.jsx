import { useLoaderData, useRevalidator } from "react-router"
import {
    updateTodo,
    deleteTodo,
    createTodo
} from "@/features/todos/api"

import TodoItem from "@/features/todos/components/TodoItem"
import NewTodo from "@/features/todos/components/NewTodo"

export default function TodoPage() {
    const todos = useLoaderData()
    const revalidator = useRevalidator()
    const todosData = todos.data

    function handleUpdate(todo, changes) {
        updateTodo({ ...todo, ...changes }).then(() => revalidator.revalidate())
    }

    function handleDelete(id) {
        deleteTodo(id).then(() => revalidator.revalidate())
    }

    function handleCreate(name) {
        createTodo(name).then(() => revalidator.revalidate())
    }

    return (
        <>
            <div>Your todos:</div>
            <NewTodo onCreate={handleCreate} />
            <div>
                {
                    todosData.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </>
    )
}
