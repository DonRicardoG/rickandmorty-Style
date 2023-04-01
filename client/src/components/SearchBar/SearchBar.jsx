import { useState } from "react";
import style from '../SearchBar/searchbar.module.css'

export default function SearchBar({onSearch}) {

   const [characterName, setCharacterName] = useState('')
   
   return (
      <div className={style.search}>
         <p>Type a number</p>
         <div className= {style.flex}>
            <input  
               type='search'
               onChange={(e) => setCharacterName(e.target.value)}
               className={style.searchinput}
            />
            <button className={style.searchbtn} onClick={() => onSearch(characterName)}>go<svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_32)">
            <path d="M13.5 9L22.5 18L13.5 27" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_3_32">
            <rect width="36" height="36" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </button>
         </div>
      </div>
   );
}
