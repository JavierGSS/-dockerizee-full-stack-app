import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { fetching } from "./fetch";
import App from "./App";

const mockRestockProducts = (fetching.handleAPI = jest.fn());

test("restocking", () => {
  const product = [
    {
      name: "Olives",
      cost: 5,
      instock: 12,
    },
  ];
  mockRestockProducts.mockResolvedValueOnce(product);
  render(<App />);

  // enter content
  const button = screen.getByText("ReStock Products");
  fireEvent.click(button);

  expect(mockRestockProducts).toBeCalledTimes(1);
  expect(mockRestockProducts).toBeCalledWith({
    body: '{"query":"query {\\n\\tproducts {\\n    data {\\n      attributes {\\n        name\\n        cost\\n      instock\\n      }\\n    }\\n  }\\n}","variables":{}}',
    headers: { map: { "content-type": "application/json" } },
    method: "POST",
    redirect: "follow",
  });
  expect(mockRestockProducts).toHaveReturned();
});

test("fetching returns the correct data", async () => {
  const mockFetch = { name: "Pear", cost: 3, instock: 6 };
  fetching.handleAPI = jest.fn(() => Promise.resolve(mockFetch));
  const data = await fetching.handleAPI();
  expect(data).toEqual(mockFetch);
});
