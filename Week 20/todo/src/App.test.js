/*import React from "react";
//import * as ReactDOM from "react-dom";
//import { getQueriesForElement } from "@testing-library/dom";
//import { render, screen, fireEvent, wait } from "@testing-library/react";
import { render, screen, fireEvent, wait } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import App from "./App";
import { api } from "./api";

/*function render(component) {
  const root = document.createElement("div");
  ReactDOM.render(component, root);
  return getQueriesForElement(root);

  // render returns the capabilities of getQueriesForElement
  // return getQueriesForElement(root);
}*/

/*test("ToDo", () => {
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
});*/

// now we test our data:
/*test("add items to list", () => {
  render(<App />);
  const input = screen.getByLabelText("Add todo");
  fireEvent.change(input, { target: { value: "wash car" } });
  fireEvent.click(screen.getByText("Add #1"));

  // confirm data
  screen.getByText("Add #2");
  screen.getByText("wash car");
});

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
});*/

// using userEvent makes the test more transparent:
/*test("user-events allows users to do...", () => {
  render(<App />);

  const input = screen.getByLabelText("Add todo");
  const button = screen.getByText("Add #1");
  const header1 = screen.getByText("TODA");
  const comp = screen.getByText("this is my component");
  userEvent.type(input, "sleep");
  userEvent.click(button);
  // confirm data:
  expect(input).toHaveDisplayValue("sleep");
  expect(header1).toHaveTextContent("TODA");
  expect(button).toBeTruthy();
  expect(comp.textContent).toBe("this is my component");
});*/

/*jest.mock("./MyComponent", () => () => <div>Hello, World!</div>);

test("mocking test", () => {
  render(<App />);
  const comp = screen.getByText("Hello, World!");
  expect(comp.textContent).toBe("Hello, World!");
});*/

// mock API
//const mockCreateItem = (api.createItem = jest.fn());

/*test("create-item", async () => {
  const todoText = "run";
  mockCreateItem.mockResolvedValueOnce(todoText);
  render(<App />);

  // enter content, interact with page
  const input = screen.getByLabelText("Add todo");
  fireEvent.change(input, { target: { value: "wash car" } });
  fireEvent.click(screen.getByText("Add #1"));

  await wait(() => {
    screen.getByText("wash car");
  });
  expect(mockCreateItem).toBeCalledWith(expect.stringContaining("wash car"));
});*/

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { api } from "./api";

// you are supposed to be able to mock the
// entire module using jest.mock('./api);
// I could not get the right syntax
const mockCreateItem = (api.createItem = jest.fn());

test("renders", async () => {
  const todoText = "Learn spanish";
  mockCreateItem.mockResolvedValueOnce(todoText);
  render(<App />);

  // enter content, interact with page
  const input = screen.getByLabelText("Add todo");
  fireEvent.change(input, { target: { value: "open gates" } });
  fireEvent.click(screen.getByText("Add #1"));

  await screen.findAllByText(() => screen.getByText("open gates"));

  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(expect.stringContaining("open gates"));
});
