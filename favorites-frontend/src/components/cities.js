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
        const value = {
            state_id: event.target.parentElement.querySelector('#filter-drop-down').value,
            name: event.target.querySelector('#new-city-name').value,
            zipcode: event.target.querySelector('#new-zipcode').value,
            title: event.target.querySelector('#new-title').value,
            description: event.target.querySelector('#new-description').value
        }
        
        this.adapter.createCities(value).then(city => {
            console.log(city.data)
            let newCity = new City(city.data)
            console.log(newCity)
            this.cities.push(newCity)

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