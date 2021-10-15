import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from './TodoForm';

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList, TopTodo }
 */

function TodoApp({ initialTodos }) {

  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    const todo = { ...newTodo, id: uuid() };
    setTodos(todos => [...todos, todo])
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(previousTodos=> previousTodos.map(currTodo => (currTodo.id === updatedTodo.id) ? updatedTodo : currTodo)) //put conditions in () for readability
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(previousTodos=> previousTodos.filter(todo => todo.id !== id))  //use call back functions as it depend on previous state
  }

  const defaultFormData={
    title: "",
    description: "",
    priority: 1
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length === 0 &&
            <span className="text-muted">You have no todos.</span>
          }
          {todos.length !== 0 &&
            <EditableTodoList
              todos={todos}
              update={update}
              remove={remove}
            />
          }
        </div>

        <div className="col-md-6">
          {todos.length !== 0 && 
            <section className="mb-4 topTodo">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
          }

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm initialFormData={defaultFormData} handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;