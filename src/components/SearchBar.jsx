export default function SearchBar(props) {
   const {onSearch} = props
   return (
      <div className="search">
         <input  type='search' placeholder="Search..." />
         <button className="search-btn" onClick={onSearch}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="28" height="28" viewBox="0 0 24 24" stroke-width="2.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
         <circle cx="10" cy="10" r="7" />
         <line x1="21" y1="21" x2="15" y2="15" />
         </svg></button>
      </div>
   );
}