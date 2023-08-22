import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Characters from './components/Characters';
import Pagination from './components/Pagination';


function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  let initialUrl = "https://api.pexels.com/v1/search?query=nature";


  const fetchCharacters = (url) => {
  fetch(url,{
    headers: {
      Authorization: "esbCbP65DXKBsFthCuepl1SQm3jAEoHZQifR852E7RZ0soOwAdNRtyK2"
    }
  })
     .then(resp => resp.json())
     .then(data => {
        setCharacters(data.photos);
        setInfo(data);
        }
      )
  };

  const onPrevious = () => {
    fetchCharacters(info.prev_page);
    console.log(info.prev_page);
  }

  const onNext = () => {
    fetchCharacters(info.next_page);
    console.log(info.next_page);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
}, []);

  return (
    <>
      <Navbar brand="Pexels fetching app" />

      <div className="container mt-3">
        <Pagination prev={info.prev_page} next={info.next_page} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev_page} next={info.next_page} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </>


  );
}

export default App;