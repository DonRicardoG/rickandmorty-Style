import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from '../Navbar/navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <div className={style.dflex}>
          <NavLink to={'/home'}>
            <div className={style.navbarLogo}></div>
          </NavLink>
          <NavLink to={'/home'} className={({isActive}) => (isActive ? style.active : style.disable)} >
            Home
          </NavLink>
          <NavLink to={'characters'} className={({isActive}) => (isActive ? style.active : style.disable) }>
            Characters
          </NavLink>
          <NavLink to={'about'} className={({isActive}) => (isActive ? style.active : style.disable) }>
            About Us
          </NavLink >
          <NavLink to={'favorites'} className={({isActive}) => (isActive ? style.active : style.disable) }>
            Favorites
          </NavLink>
        </div>
        <Link to={'/'} className={style.logout}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M7 12h14l-3 -3m0 6l3 -3" />
          </svg>Logout</Link>
        
    </div>
  )
}

export default Navbar