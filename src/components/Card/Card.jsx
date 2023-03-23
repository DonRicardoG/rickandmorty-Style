import { Link } from "react-router-dom";
import { agregarFavorito, eliminarFavorito } from "../../redux/actions/actions";
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import style from '../Card/card.module.css'


export function Card(props) {
   const {name, gender, image, onClose, species, id, agregarFavorito, eliminarFavorito, myFavorites} = props;

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         eliminarFavorito(id)
      }else{
         setIsFav(true)
         agregarFavorito({name, gender, image, onClose, species, id})
         console.log('desde handleFavorit agregar')
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
      //eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);

   return (
      <div className="card">
         <div className="card-title">
            <Link className="first-title" to={`/detail/${id}`}>
               <h2>{name}</h2>
            </Link>
            {
               isFav ? (
                  <button className={style.icon} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={style.icon} onClick={handleFavorite}>🤍</button>
               )
            }
            <div className="second-title">
               <button onClick={() => onClose(id)}>X</button>
            </div>
         </div>
         <div className="card-content">
            <div className="card-img">
               <img  src={image} alt="not found" />
            </div>
            <div className="card-text">
               <h2 className="text-in">Specie: {species}</h2>
               <h2 className="text-in">Gender: {gender}</h2>
            </div>
         </div>
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return{
      agregarFavorito: (char) =>{
         dispatch(agregarFavorito(char))
      },

      eliminarFavorito: (id) =>{
         dispatch(eliminarFavorito(id))
      }
   }
}

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);
