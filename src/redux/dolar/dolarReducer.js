export const dolar =
    "https://www.dolarsi.com/api/api.php?type=valoresprincipales"; //API del dolar

let dolares = []

fetch(dolar)
    .then((response) => response.json())
    .then((dolar) => dolares.push(dolar));


const INITIAL_STATE = {
    dolares: dolares,
}

const dolarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state
    }
}

export default dolarReducer