import React from "react";
import "./App.css";

function App() {
  const [value, setValue] = React.useState([]);
  const [items, setItems] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, value]);
    setValue("");
  };

  const removeTask = (e) => {
    e.preventDefault();
    items.pop();
    setItems([...items]);
    console.log(items);
  };

  return (
    <div>
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
        <button>Add #{items.length + 1}</button>
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
