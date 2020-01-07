import axios from 'axios';
// constantes
let initialData = {
    fetching: false,
    array:[],
    current:{}
}
// url que trae los caracteres
let URL = 'https://rickandmortyapi.com/api/character';

// representa la accion que se esta ejecutando
let GET_CHARACTERS = 'GET_CHARACTER';
// respuesta satisfactoria
let GET_CHARACTERS_SUCCES = 'GET_CHARACTER_SUCCES';
// error
let GET_CHARACTER_ERROR = 'GET_CHARACTER_ERROR';

// reducer
export default function reducer(state=initialData, action){
    switch(action.type){
        case GET_CHARACTERS: 
        case GET_CHARACTER_ERROR: 
        case GET_CHARACTERS_SUCCES: 
        return {...state, array:action.payload}
        default:
            return state
    }
}

// actions (thunks)
export let getCharactersAction = () => (dispatch, getState) => {
    return axios.get(URL)
        .then(res => {
            //despacha (crea) la accion que se va a apasar por la funcion reducer 
            dispatch({
                type:GET_CHARACTERS_SUCCES,
                payload:res.data.results
            })
        })
}

