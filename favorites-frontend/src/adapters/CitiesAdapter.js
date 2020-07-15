class CitiesAdapter {
    constructor() {
        this.baseUrl = 'http://127.0.0.1:3000/cities'
    }
    getCities() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }
}