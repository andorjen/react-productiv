import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

const initialFormData ={
    title: "",
    description: "",
    priority: 1
  };


it("renders without crashing", function () {
    render(<TodoForm initialFormData={initialFormData} />);
  });


it("renders the correct form fields", function () {
    const {container, debug} = render(<TodoForm initialFormData={initialFormData} />);

    expect(container).toContainHTML('class="NewTodoForm"');
    expect(container).toContainHTML('name="title"');
    expect(container).toContainHTML('name="description"');
    expect(container).toContainHTML('name="priority"');
});

it("renders the correct data before editing", function () {
    const {container, debug} = render(<TodoForm initialFormData={initialFormData} />);

    const titleField = container.querySelector("#newTodo-title");   
    expect(titleField.value).toEqual('');

    const descriptionField = container.querySelector("#newTodo-description");
    expect(descriptionField.value).toEqual('');

    const priorityField = container.querySelector("#newTodo-priority");
    expect(priorityField.value).toEqual("1");
});


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


it("matches snapshot", function () {
    const { container } = render(<TodoForm initialFormData={initialFormData} />);
    expect(container).toMatchSnapshot();
});