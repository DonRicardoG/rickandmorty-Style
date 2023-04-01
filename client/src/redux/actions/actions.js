import { ELIMINAR_FAVORITO, AGREGAR_FAVORITO } from "./types";


export const agregarFavorito = (character) =>{
    return{
        type: AGREGAR_FAVORITO,
        payload: character
    }
}

export const eliminarFavorito = (id) =>{
    return{
        type: ELIMINAR_FAVORITO,
        payload: id
    }
}