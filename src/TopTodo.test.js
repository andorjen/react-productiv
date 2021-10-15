import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";


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
    render(<TopTodo todos={testTodos} />);
  });

it("matches snapshot", function () {
    const { container } = render(<TopTodo todos={testTodos} />);
    expect(container).toMatchSnapshot();
});

it("renders correct top todo", function () {
    const { container, debug }= render(<TopTodo todos={testTodos} />);

    const topTodo = container.querySelector(".Todo");

    expect(topTodo).toContainHTML("Make dinner");
    expect(topTodo).toContainHTML("Cook something healthy");
    expect(topTodo).toContainHTML("(priority: 1)");

    expect(topTodo).not.toContainHTML("Code!");
    expect(topTodo).not.toContainHTML("Write some code");
    expect(topTodo).not.toContainHTML("Go to bed");
    expect(topTodo).not.toContainHTML("In bed by 11:15");

  });