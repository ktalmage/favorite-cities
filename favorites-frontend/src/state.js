
const STATES_URL = `${BASE_URL}/states`




function getStates() {
   
    return fetch(STATES_URL)
    .then(resp => resp.json())
    .then(function(data) {
        let states = data.data;
        states.map(state => state.attributes.name)
        let stateSelect = document.createElement('select')
        for (let state of states) {
            let option = document.createElement('option');
            option.value = state.attributes.name
            option.text = state.attributes.name
            stateSelect.appendChild(option)
        }
        document.querySelector('#filter-drop-down').appendChild(stateSelect)
    })

}
    
getStates();

