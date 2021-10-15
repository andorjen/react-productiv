import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

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
    render(<EditableTodoList todos={testTodos} />);
  });


it("renders the correct content before and after toggling edit button ", function () {
    const {container, debug} = render(<EditableTodoList todos={testTodos} />);

    expect(container).toContainHTML("Make dinner");
    expect(container).toContainHTML("Cook something healthy");
    expect(container).toContainHTML("(priority: 1)");
    expect(container).toContainHTML("Code!");
    expect(container).toContainHTML("Write some code");
    expect(container).toContainHTML("Go to bed");
    expect(container).toContainHTML("In bed by 11:15");
    expect(container).toContainHTML("Edit");
    expect(container).toContainHTML("Del");
});


it("matches snapshot", function () {
    const { container } = render(<EditableTodoList todos={testTodos} />);
    expect(container).toMatchSnapshot();
});