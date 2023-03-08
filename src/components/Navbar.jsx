import React from 'react'
import SearchBar from './SearchBar'
import logo from '../photos/logo.png'

const Navbar = ({onSearch, setCharacters}) => {
  return (
    <div>
        <div className='nav-bar'>
            <SearchBar
              onSearch={(characterID) => onSearch(characterID)}
              setCharacters = {setCharacters}
            />
        </div>
        
    </div>
  )
}

export default Navbar