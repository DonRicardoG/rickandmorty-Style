import './App.css'
import Cards from './components/Cards.jsx'
import "./fonts/get_schwifty.ttf"
import Navbar from './components/Navbar.jsx'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'

function App () {

  const [characters, setCharacters] = useState([]);


  const onSearch = (id) =>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         (
          data.name
           ? characters.filter((char) => char.id === data.id).length === 0 : ""
         )
          ? setCharacters([...characters,data])
           : alert('Personaje ya existe');
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) =>{
    const closeCharacter = characters.filter(character => character.id !== id);

    setCharacters(closeCharacter);
  }

  return (
    <div>
      <Navbar
        onSearch = {onSearch}
        setCharacters = {setCharacters}
      />
      <Routes>
        <Route path='/' element={
          <Cards 
            characters = {characters}
            onClose ={onClose}
          />} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
