import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { fetching } from "./fetch";
import App from "./App";

const mockRestockProducts = (fetching.handleAPI = jest.fn());

test("restocking", async () => {});
