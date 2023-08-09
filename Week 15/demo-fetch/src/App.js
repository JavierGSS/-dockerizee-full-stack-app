import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "https://huggingface.co/api/models";
  const [data, setData] = useState([]);
  console.log("DATA ", data);

  const fetchInfo = async () => {
    const res = await axios.get(url);
    return setData(res.data);
  };

  console.log("DATA2 ", data);

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "black" }}>Fetch from source</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#CD8FFD",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <a href={dataObj.id}>{dataObj.tags[8]}</a>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;