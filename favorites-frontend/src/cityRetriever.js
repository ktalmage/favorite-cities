class citiesReceiver {
    constructor() {
        this.baseURL = CITIES_URL
        
    }

    getCities() {
        return fetch(this.baseURL).then(resp => resp.json()).then(json.data)

    }
}