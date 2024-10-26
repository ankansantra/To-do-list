import React, { useState } from "react";

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        editTodo(todo.id, newText);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span
                    onClick={() => toggleComplete(todo.id)}
                    style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                >
                    {todo.text}
                </span>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            {isEditing ? (
                <button onClick={handleEdit}>Save</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
    );
}

export default ToDoItem;
