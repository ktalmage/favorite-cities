class CitiesAdapter {
    constructor() {
        this.baseUrl = 'http://127.0.0.1:3000/cities'
    }
    getCities() {
        return fetch(this.baseUrl).then(resp => resp.json())
    }

    createCities(value) {
       const city = {
           name: value.name,
           zipcode: value.zipcode,
           title: value.title,
           description: value.description,
           state_id: value.state_id,
           
       }
       
        return fetch(this.baseUrl,{
            
            method: 'post',
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
                },
            body: JSON.stringify(city),
        }).then(resp => resp.json())
        
    }
}