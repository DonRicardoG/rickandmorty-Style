import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import style from '../Characters/characters.module.css'
import Cards from '../Cards/Cards'

const Characters = ({onClose, characters, onSearch, setCharacters}) => {
  return (
    <div className={style.flex}>
        <div className={style.charactersHeader}>
            <SearchBar
                onSearch={onSearch}
                setCharacters={setCharacters}
            />
        </div>
        <div className={style.characters}>
            <Cards 
            characters = {characters}
            onClose ={onClose}
            />
        </div>
    </div>
    
  )
}

export default Characters