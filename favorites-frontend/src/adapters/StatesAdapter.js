class StatesAdapter {
    constructor() {
        this.baseUrl = 'http://127.0.0.1:3000/states'
    }
    getStates() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }
}