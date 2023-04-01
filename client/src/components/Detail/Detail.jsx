import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import style from '../Detail/detail.module.css'

const Detail = () => {
  const [character, setCharacter] = useState({});
  const {detailId} = useParams();
  const navigate = useNavigate();
  useEffect(() =>{
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
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
      <div className={style.content}>
        <div className={style.text}>
          <h1>Nombre: <span>{character.name}</span></h1>
          <h1>Status: <span>{character.status}</span></h1>
          <h1>Gender: <span>{character.gender}</span></h1>
          <h1>Origin: <span>{character.origin?.name}</span></h1>
          <h1>Especie: <span>{character.species}</span></h1>
        </div>
        <div className={style.imgDiv}>
          <img className={style.img} src={character.image} alt="not found" />
        </div>
      </div>
      <button className={style.btn} onClick={() => navigate('/characters')}>Volver</button>
    </div>
    
  )
}

export default Detail