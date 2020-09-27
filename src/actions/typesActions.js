export const fetchTypes = () => {
    return dispatch => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(data => dispatch(setTypes(data.results)))
    }
}


const setTypes = (types) => {
    return {
        type: 'FETCH_TYPES',
        payload: types
    }
}