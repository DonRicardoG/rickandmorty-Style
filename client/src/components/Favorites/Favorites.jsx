import React from 'react'
import { connect } from 'react-redux';
import Card from '../Card/Card';

export const Favorites = (props) => {
  return (
    <div className='card-flex'>
         {props.myFavorites.map((character) => (
            <Card
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               id = {character.id}
            />
         ))}
      </div>
  )
}


export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);