import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Characters from './components/Characters';
import Pagination from './components/Pagination';
import axios from 'axios';


function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  let initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = async (url) => {
    const datos = await axios(url);
    console.log(datos);
    setInfo(datos.data.info);
    setCharacters(datos.data.results);
  }

  /*const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error));
  };*/

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container mt-3">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </>


  );
}

export default App;