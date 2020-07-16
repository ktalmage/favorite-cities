class Cities {
    constructor() {
        this.cities = []
        this.adapter = new CitiesAdapter()
        this.initibindingsAndEventListeners()
        this.fetchAndLoadCities()
    }

    initibindingsAndEventListeners() {
        this.citiesCard = document.getElementById('city-card-container')
        this.newcityName = document.getElementById('new-city-name')
        this.cityForm = document.getElementById('new-city-form')
        this.cityForm.addEventListener('submit', this.createCity.bind(this))
    }

    createCity(event) {
        event.preventDefault()
        const value = this.newcityName.value
        this.adapter.createCities(value).then(city => {
            this.cities.push(new City(city))
            this.render()
        })
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
        citiesCard.innerHTML = this.cities.map( c => c.renderCard()).join('')
        document.querySelector('#city-card-container').appendChild(citiesCard)
    }
}