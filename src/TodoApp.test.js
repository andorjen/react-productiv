import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

const testTodos = [ {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  }];


it("renders without crashing", function () {
    render(<TodoApp initialTodos={testTodos} />);
  });

it("matches snapshot", function () {
    const { container } = render(<TodoApp initialTodos={testTodos}  />);
    expect(container).toMatchSnapshot();
});


it("renders the correct elements", function () {
    const {container, debug}= render(<TodoApp initialTodos={testTodos} />);
 
    const editableTodoList = container.querySelector('.EditableTodoList');
    expect(editableTodoList).toContainHTML("Make dinner");
    expect(editableTodoList).toContainHTML("Cook something healthy");
    expect(editableTodoList).toContainHTML("(priority: 1)");
    expect(editableTodoList).toContainHTML("Code!");
    expect(editableTodoList).toContainHTML("Write some code");
    expect(editableTodoList).toContainHTML("Go to bed");
    expect(editableTodoList).toContainHTML("In bed by 11:15");
    expect(editableTodoList).toContainHTML("Edit");
    expect(editableTodoList).toContainHTML("Del");

    const topTodo = container.querySelector('.topTodo');
    expect(topTodo).toContainHTML("<h3>Top Todo</h3>");
    expect(topTodo).toContainHTML("(priority: 1)");

    const todoForm = container.querySelector('.NewTodoForm');
    debug(todoForm);
    expect(todoForm).toContainHTML("Gø");
 
  });

// it("renders the correct form fields", function () {
//     const {container, debug} = render(<TodoForm initialFormData={initialFormData} />);

//     expect(container).toContainHTML('class="NewTodoForm"');
//     expect(container).toContainHTML('name="title"');
//     expect(container).toContainHTML('name="description"');
//     expect(container).toContainHTML('name="priority"');
// });

// it("renders the correct data before editing", function () {
//     const {container, debug} = render(<TodoForm initialFormData={initialFormData} />);

//     const titleField = container.querySelector("#newTodo-title");   
//     expect(titleField.value).toEqual('');

//     const descriptionField = container.querySelector("#newTodo-description");
//     expect(descriptionField.value).toEqual('');

//     const priorityField = container.querySelector("#newTodo-priority");
//     expect(priorityField.value).toEqual("1");
// });


// it("renders the correct data after editing", function () {
//     const {container, debug} = render(<TodoForm initialFormData={initialFormData} />);

//     // fireEvent onChange?

//     //Data after changing reflects the changes made
//     const titleField = container.querySelector("#newTodo-title");   
//     expect(titleField.value).toEqual('changed title');

//     const descriptionField = container.querySelector("#newTodo-description");
//     expect(descriptionField.value).toEqual('changed description');

//     const priorityField = container.querySelector("#newTodo-priority");
//     expect(priorityField.value).toEqual("2");

// });


