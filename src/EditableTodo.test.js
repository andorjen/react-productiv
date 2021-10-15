import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const testTodo = {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2
};

it("renders without crashing", function () {
    render(<EditableTodo todo={testTodo} />);
  });


it("renders the correct content before and after toggling edit button ", function () {
    const {container, debug} = render(<EditableTodo todo={testTodo} />);
    // debug(container);
    expect(container).toContainHTML("Code!");
    expect(container).toContainHTML("Write some code");
    expect(container).toContainHTML("(priority: 2)");
    expect(container).toContainHTML("Edit");
    expect(container).toContainHTML("Del");

    expect(container).not.toContainHTML('class="form-group"');
    expect(container).not.toContainHTML('class="NewTodoForm"');
    // debug(container);
    fireEvent.click(container.querySelector(".EditableTodo-toggle"));
    // debug(container);
    expect(container).toContainHTML('class="form-group"');
    expect(container).toContainHTML('class="NewTodoForm"');

});


it("matches snapshot", function () {
    const { container } = render(<EditableTodo todo={testTodo} />);
    expect(container).toMatchSnapshot();
});