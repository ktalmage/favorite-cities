class Cities {
    constructor() {
        this.cities = []
        this.adapter = new CitiesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadCities()
    }

    fetchAndLoadCities() {
        this.adapter.getCities().then(cities => {
            cities.data.forEach(city => this.cities.push(city))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const citiesContainer = document.getElementById('city-card-container')
        citiesContainer.innerHTML = `Hi`
        
    }
}