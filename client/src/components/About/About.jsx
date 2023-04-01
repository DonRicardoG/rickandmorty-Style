import React from 'react'
import style from '../About/about.module.css'
import { Link } from 'react-router-dom'

console.log(style)

const About = () => {
  return (
    <div className={style.aboutDiv}>
        <div className={style.img}>
        </div>
        <div className={style.text}>
            <h1>About Us</h1>
            <div>
                <p className={style.text2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde tempore animi quo reiciendis. Inventore ut hic, explicabo rerum atque veniam libero vitae aperiam, quos possimus enim consequatur cumque harum quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <Link to='/home'><button>back</button></Link>
        </div>
    </div>
  )
}

export default About