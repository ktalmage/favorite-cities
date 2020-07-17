// const BASE_URL = ('http://127.0.0.1:3000')
// const CITIES_URL = `${BASE_URL}/cities`
class City {
    constructor(cityJSON) {
        
        if (cityJSON.id) {
            this.id = cityJSON.id
        }
        this.name = cityJSON.attributes.name
        this.zipcode = cityJSON.attributes.zipcode
        this.state = cityJSON.attributes.state.name
        this.title = cityJSON.attributes.title
        this.description = cityJSON.attributes.description
        
    }

    renderCard() {
        return `<div class='card'id='city-${this.id}'>
        State:<h4>${this.state}</h4>
        City:<h4>${this.name}</h4>
        Zipcode:<h4>${this.zipcode}</h4>
        Title:<h4>${this.title}</h4>
        Experience:<h4>${this.description}</h4>
        <button type="button" class="deletebtn" id= ${this.id}>Delete</button>
        `
    }
}


