import { useState } from "react"

export default function TodoItem({ todo, onUpdate, onDelete }) {
    const [isEditingName, setIsEditingName] = useState(false)

    return (
        <div >
            <input id={todo.id} type="checkbox" checked={todo.isComplete} onChange={e => onUpdate(todo, { isComplete: e.target.checked })} />
            {isEditingName ?
                <input value={todo.name} onChange={e => console.log(e.target.value)} />
                :
                <span>{todo.name}</span>
            }
            <button onClick={e => onDelete(todo.id)}>Delete</button>
        </div>
    )
}
