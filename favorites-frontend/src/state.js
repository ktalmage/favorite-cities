const BASE_URL = ('http://127.0.0.1:3000')
const STATES_URL = `${BASE_URL}/states`
const CITIES_URL = `${BASE_URL}/cities`

window.addEventListener('load', ()=> {
    getStates()
})

function getStates() {
    let states = []
    fetch(STATES_URL)
    .then(resp => resp.json())
    .then(states => {
        states.forEach(state => renderStates(state)
        )
    })
        // addstateListener()                 
}

    function renderStates(state) {
        let stateCard = document.createElement('div')
        stateCard.innerHTML += `
        <div class='card'id ='state-${state.id}'>
        <h2>${state.name}</h2>
        </div>
        `
        document.querySelector('#get-states').appendChild(stateCard)
    }










// class State {
//     static all = []

//     constuctor(state) {
//         this.id = state.id;
//         this.name = state.name;
//         this.code = state.code;
//         this.cities = state.cities;
//         State.all.push(this)
//     }
//     renderState
// }
        
    


