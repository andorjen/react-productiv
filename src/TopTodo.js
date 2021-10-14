import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * State:
 * - none
 * 
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {
  // lowest-priority # is the highest priority
  const top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);
  const {id, title, description, priority} = top;
  
  return <Todo id={id} title={title} description={description} priority={priority} />;
}

export default TopTodo;