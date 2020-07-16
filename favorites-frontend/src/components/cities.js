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
        console.log(this.cities)
        debugger
        const citiesContainer = document.querySelector('#city-card-container')
        citiesContainer.innerHTML = `<li>${this.body}</li>`
        
        
    }
}