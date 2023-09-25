import React from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import { api } from "./api";

function App() {
  const [value, setValue] = React.useState([]);
  const [items, setItems] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //setItems([...items, value]);
    //setValue("");

    // asynchronous call to an API mimicked by our api component
    api.createItem(value).then((persistedItem) => {
      setItems([...items, persistedItem]);
      setValue("");
    });
  };

  const removeTask = (e) => {
    e.preventDefault();
    items.pop();
    setItems([...items]);
    console.log(items);
  };

  return (
    <div>
      <div className="App">
        <MyComponent />
      </div>
      <h1>TODA</h1>
      <h1>TODO</h1>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Add todo</label>
        <input
          id="new-todo"
          value={value}
          placeholder="Add Todo..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button id="button">Add #{items.length + 1}</button>
        <button onClick={removeTask}>Remove todo</button>
      </form>
    </div>
  );
}

function TodoList(props) {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default App;
