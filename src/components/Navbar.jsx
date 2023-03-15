import React from 'react'
import SearchBar from './SearchBar'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({onSearch, setCharacters}) => {
  return (
    <div className='nav-bar'>
        <SearchBar
          onSearch={(characterID) => onSearch(characterID)}
          setCharacters = {setCharacters}
        />
        <div className='d-flex'>
          <NavLink to={'/home'} className={({isActive}) => (isActive ? 'active' : 'disable')} >
            Home
          </NavLink>
          <NavLink to={'about'} className={({isActive}) => (isActive ? 'active' : 'disable') }>
            About
          </NavLink>
          <Link to={'/'} className='logout'>Log Out</Link>
        </div>
        
    </div>
  )
}

export default Navbar