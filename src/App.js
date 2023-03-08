import './App.css'
import Cards from './components/Cards.jsx'
import "./fonts/get_schwifty.ttf"
import Navbar from './components/Navbar.jsx'
import { useState } from 'react'

function App () {

  const [characters, setCharacters] = useState([]);


  const onSearch = (character) =>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = (id) =>{
    const closeCharacter = characters.filter(character => character.id !== id);

    setCharacters(closeCharacter);
  }

  return (
    <div className='App'>
      <div>
        <Navbar
          onSearch = {onSearch}
          setCharacters = {setCharacters}
        />
      </div>
      <div className='cards-body' id='cardsBody'>
        <Cards
          characters={characters}
          onClose ={onClose}
        />
      </div>
    </div>
  )
}

export default App
