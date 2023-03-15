import './App.css'
import Cards from './components/Cards.jsx'
import "./fonts/get_schwifty.ttf"
import Navbar from './components/Navbar.jsx'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form/Form'

function App () {

  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate()
  const [access, setAccess] = useState(false);
  const username = 'r.gomez1999@outlook.com'
  const password = 'Pzh89kl31w'

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
 }

 useEffect(() => {
  !access && navigate('/');
}, [access, navigate]);

  let location = useLocation();

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
      {location.pathname === '/' ? '' : <Navbar
        onSearch = {onSearch}
        setCharacters = {setCharacters}
      />}
      <Routes>
        <Route path='/' element={<Form login ={login}/>} />
        <Route path='/home' element={
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
