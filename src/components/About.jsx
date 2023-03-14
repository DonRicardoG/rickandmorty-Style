import React from 'react'
import fotoMia from '../photos/aboutme.PNG'

const About = () => {
  return (
    <div className='card'>
        <h1 className='card-about'>Acerca de mi</h1>
        <div>
            <h2 className='text-center'>Ricardo Gómez</h2>
            <img className='card-img' src={fotoMia} alt="not found" width={'200px'} />
            <div className='card-contentA'>
                <h3>Specie: <span>Human</span></h3>
                <h3>Gender: <span>Male</span></h3>
                <h2>Descripcion: </h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde tempore animi quo reiciendis. Inventore ut hic, explicabo rerum atque veniam libero vitae aperiam, quos possimus enim consequatur cumque harum quae?</p>
            </div>
        </div>
    </div>
  )
}

export default About