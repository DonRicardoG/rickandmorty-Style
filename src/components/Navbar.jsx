import React from 'react'
import SearchBar from './SearchBar'
import logo from '../photos/logo.png'

const Navbar = () => {
  return (
    <div>
        <div className='nav-bar'>
            <div className='navbar-img'>
                <img src={logo} alt="not found" width='400px' height='122px' />
            </div>
            <h1>Characters</h1>
            <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
            />
            <a className='arrow down' href='#cardsBody'></a>
        </div>
        
    </div>
  )
}

export default Navbar