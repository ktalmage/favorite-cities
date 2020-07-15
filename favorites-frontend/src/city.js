
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
    fetch(`${BASE_URL}/cities`)
.then(resp => resp.json())
.then(data => {
    const cityContainer = document.querySelector('#get-cities')
    data.forEach(city => render (city))
    addCityListeners()

})
    
}


