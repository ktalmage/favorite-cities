const CITIES_URL = `${BASE_URL}/cities`
class Cty {
    constuctor(city) {
        this.id = city.id;
        this.name = city.name;
        this.zipcode = city.zipcode;
        this.title = city.title;
        this.description = city.description;
        this.states = city.states;
    }

    renderCity() {
        return document.createElement('li')
        
    }
}

 getCities=() => {
    fetch(CITIES_URL)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(city => renderCity(city))
        

})
    
}


