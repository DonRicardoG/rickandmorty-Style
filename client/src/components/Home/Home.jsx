import React from 'react'
import style from '../Home/home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={style.image}>
        <div className={style.card}>
            <h1>Look for your favorite <br /> character</h1>
            <Link className={style.button} to={'/characters'}>click here</Link>
        </div>
    </div>
  )
}

export default Home