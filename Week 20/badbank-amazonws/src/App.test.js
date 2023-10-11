import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Login from "./components/createaccount";

test("app loads in root", () => {
  render(<App />);
});

test("button enabled after input", async () => {
  render(<Login />);
  const email = screen.getByPlaceholderText(/enter email.../i);
  const password = screen.getByPlaceholderText(/enter password.../i);
  const button = screen.getByRole("button");
  expect(button).toBeDisabled();
  fireEvent.change(email, { target: { value: "jagasal@gmail.com" } });
  fireEvent.change(password, { target: { value: "secret" } });
  expect(button).toBeEnabled();
  expect(button).toBeTruthy();
});
