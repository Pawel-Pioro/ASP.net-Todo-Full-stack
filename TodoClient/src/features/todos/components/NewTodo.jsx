import { useState } from "react"

export default function NewTodo({ onCreate }) {
    const [todoName, setTodoName] = useState('')

    return (
        <div>
            <input
                type="text"
                placeholder="Type a todo..."
                value={todoName}
                onChange={e => setTodoName(e.target.value)}
            />
            <button onClick={e => onCreate(todoName)}>Add</button>
        </div>
    )
}
