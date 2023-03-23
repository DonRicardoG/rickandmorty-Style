import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO } from "../actions/types"
const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case AGREGAR_FAVORITO:
            return{
                ...state,
                myFavorites:[...state.myFavorites, payload]
            }
        
        case ELIMINAR_FAVORITO:
            const filtered = state.myFavorites.filter((char) => char.id !== payload)
            console.log(filtered)
            return{
                ...state,
                myFavorites: filtered
            }
            
    
        default:
            return state
    }
}

export default rootReducer