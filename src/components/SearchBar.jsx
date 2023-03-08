import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [characterName, setCharacterName] = useState('')
   
   return (
      <div className="search">
         <input  
            type='search'
            onChange={(e) => setCharacterName(e.target.value)}
         />
         <button className="search-btn" onClick={() => onSearch(characterName)}>Agregar</button>
      </div>
   );
}
