import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos}) {

  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    const todo = {...newTodo, id: uuid()};
    setTodos(todos=> [...todos, todo])
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos.map(currTodo=>currTodo.id === updatedTodo.id ? updatedTodo : currTodo))
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos.filter(todo=>todo.id !== id))
  }

  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            <EditableTodoList /> OR
            <span className="text-muted">You have no todos.</span>
          </div>

          <div className="col-md-6">
            (if no top todo, omit this whole section)
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo />
            </section>

            <section>
              <h3 className="mb-3">Add Nü</h3>
              FIXME
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;