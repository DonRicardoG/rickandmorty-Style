import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import style from '../Detail/detail.module.css'


const Detail = () => {
  const [character, setCharacter] = useState({});
  const {detailId} = useParams();
  const navigate = useNavigate();
  useEffect(() =>{
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((res) => res.json())
      .then((data) => {
        data.name ? setCharacter(data) :
        alert("No hay personajes con ese ID");
      })
      .catch((err) =>{
        console.log(err);
        alert('Ups! Algo estuvo mal');
      });
  }, [detailId]);

  return (
    <div className={style.dflex}>
      <div className='detail-card'>
        <div className='detail-text'>
          <h1>Nombre: <span>{character.name}</span></h1>
          <h1>Status: <span>{character.status}</span></h1>
          <h1>Gender: <span>{character.gender}</span></h1>
          <h1>Origin: <span>{character.origin?.name}</span></h1>
          <h1>Especie: <span>{character.species}</span></h1>
        </div>
        <div>
          <img src={character.image} alt="not found" />
        </div>
      </div>
      <button className='detail-btn' onClick={() => navigate('/home')}>Volver</button>
    </div>
    
  )
}

export default Detail