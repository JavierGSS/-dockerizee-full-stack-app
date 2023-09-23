import React from "react";
//import * as ReactDOM from "react-dom";
//import { getQueriesForElement } from "@testing-library/dom";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

/*function render(component) {
  const root = document.createElement("div");
  ReactDOM.render(component, root);
  return getQueriesForElement(root);

  // render returns the capabilities of getQueriesForElement
  // return getQueriesForElement(root);
}*/

test("ToDo", () => {
  render(<App />);
  // after rendering our component,  use DOM's
  // APIs (query selector) to make assertions

  //expect(root.querySelector("h1").textContent).toBe("TODO");
  //expect(root.querySelector("label").textContent).toBe("Add todo");
  screen.getByText("TODO");
  screen.getByText("TODA");
  screen.getByLabelText("Add todo");
  screen.getByText("Add #1");
  screen.getByPlaceholderText("Add Todo...");
});

// now we test our data:
/*test("fire event", () => {
  render(<App />);
  const input = screen.getByLabelText("Add todo");
  fireEvent.change(input, { target: { value: "wash car" } });
  fireEvent.click(screen.getByText("Add #1"));

  // confirm data
  screen.getByText("Add #2");
  screen.getByText("wash car");
});*/

test("remove todo", () => {
  render(<App />);
  const input = screen.getByLabelText("Add todo");
  fireEvent.change(input, { target: { value: "wash car" } });
  fireEvent.click(screen.getByText("Add #1"));
  fireEvent.change(input, { target: { value: "learn React" } });
  fireEvent.click(screen.getByText("Add #2"));
  fireEvent.click(screen.getByText("Remove todo"));

  // confirm data
  screen.getByText("Add #2");
  screen.getByText("wash car");
  screen.getByLabelText("Add todo");
});

// using userEvent makes the test more transparent:
/*test("user-events allows users to do...", () => {
  render(<App />);
  const input = screen.getByLabelText("Add todo");
  const button = screen.getByText("Add #1");

  userEvent.type(input, "learn Spanish");
  userEvent.click(button);

  // confirm data

  screen.getByText("learn Spanish");
});*/
