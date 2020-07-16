class Cities {
    constructor() {
        this.cities = []
        this.adapter = new CitiesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadCities()
    }

    fetchAndLoadCities() {
        this.adapter.getCities().then(cities => {
           
            cities.data.forEach(city => this.cities.push(new City(city)))

        })
        .then(() => {
            this.render()
        })
    }

    render() {
        
        
        let citiesCard = document.createElement('div')
        citiesCard.innerHTML = this.cities.map( c =>`<div class='card'id='city-${c.id}'>
        <h4>${c.state}</h4>
        <h4>${c.name}</h4>
        <h4>${c.zipcode}</h4>
        <h4>${c.title}</h4>
        <h4>${c.description}</h4>`)
        
        document.querySelector('#city-card-container').appendChild(citiesCard)
    }
}