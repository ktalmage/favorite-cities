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
            state_id: event.target[0].value,
            name: event.target[1].value,
            zipcode: event.target[2].value,
            title: event.target[3].value,
            description: event.target[4].value
        }
        
        this.adapter.createCities(value).then(city => {
           
            let newCity = new City(city.data)
            console.log(newCity)
            // this.cities.push(newCity)

        document.querySelector('#city-card-container').innerHTML += newCity.renderCard()
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
        let citiesContainer = document.querySelector('#city-card-container')
        citiesContainer.innerHTML ="" 
        this.cities.forEach( c => citiesContainer.innerHTML += c.renderCard())
       
    }
}