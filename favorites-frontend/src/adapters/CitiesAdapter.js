class CitiesAdapter {
    constructor() {
        this.baseUrl = 'http://127.0.0.1:3000/cities'
    }
    getCities() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }

    createCities(value) {
       const city = {
           name: value,
           zipcode: value,
           title: value,
           description: value,
           state_id: value,
       }
       
        return fetch(this.baseUrl,{
            
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
                },
            body: JSON.stringify({city}),
        }).then(resp => resp.json())
    }
}