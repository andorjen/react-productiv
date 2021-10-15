import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./EditableTodo.css";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 * 
 * State: isEditing (true/false; initial state = false)
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {

  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(isEditing=>!isEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    toggleEdit();
    update(formData);
    //Come back to this after working on the form
  }

  return (
    <div className="EditableTodo">

      {isEditing &&
        <TodoForm initialFormData={todo} handleSave={handleSave} />
      }

      {!isEditing &&
        <div className="mb-3 eachTodo">
          <Todo 
            id={todo.id}
            title={todo.title}
            description={todo.description}
            priority={todo.priority} />
          <div className="float-right text-sm-right edit">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
        </div>}

    </div>
  );
}


export default EditableTodo;
