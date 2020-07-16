class CitiesAdapter {
    constructor() {
        this.baseUrl = 'http://127.0.0.1:3000/cities'
    }
    getCities() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }

    createCities(value) {
        const city = {
            body: value
        }
       
        return fetch(this.baseUrl,{
            
            method: 'POST',
            body: JSON.stringify({city: this.name}),
            headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
            },
           
        }).then(resp => resp.json())
    }
}