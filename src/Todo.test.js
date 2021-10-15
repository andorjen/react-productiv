import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function () {
    // this is a low-value test, but better than nothing
    render(<Todo 
      id={1}
      title="Test title."
      description="This is a test description."
      priority={1} />);
  });
  // end

  it("has the correct title, description and priority", function () {
    const { container, debug } = render(<Todo 
      id={1}
      title="Test title."
      description="This is a test description."
      priority={1} />);
    const todoHtml = container.querySelector(".Todo");
    debug(todoHtml);
  
    expect(todoHtml).toContainHTML("Test title.");
    expect(todoHtml).toContainHTML("(priority: 1)");
    expect(todoHtml).toContainHTML("This is a test description.")
  });
  // end

  it("matches snapshot", function () {
    const { container } = render(<Todo 
      id={1}
      title="Test title."
      description="This is a test description."
      priority={1} />);
    expect(container).toMatchSnapshot();
  });
  // end