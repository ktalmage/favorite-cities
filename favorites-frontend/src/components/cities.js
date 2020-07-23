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
        this.zipSearch = document.getElementById('city-search')
        this.cityForm.addEventListener('submit', this.createCity.bind(this))
        this.citiesCard.addEventListener('click', this.deleteCity.bind(this))
        this.zipSearch.addEventListener('submit', this.search.bind(this))
            
        
        
    }

    search(event) {
        event.preventDefault()
        const input = event.target[0].value
        const cityTest = this.cities.filter(city => city.zipcode === input)
        this.searchResults(cityTest)


        
    }

    searchResults(cities) {
        event.preventDefault()
        const results = cities.map(city => 
            city.renderCard()).join('');
            this.citiesCard.innerHTML = results
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
            console.log(this)
            // Clear form
            this.cityForm.querySelector('#new-city-name').value = ""
            this.cityForm.querySelector('#new-zipcode').value = ""
            this.cityForm.querySelector('#new-title').value = ""
            this.cityForm.querySelector('#new-description').value = ""
            document.querySelector('#city-card-container').innerHTML += newCity.renderCard()
        
        })
    }

    

    clearCities() {
        let clearOut = document.querySelector('#city-card-container')
        clearOut.innerHTML = ""
    }
    deleteCity(event) {
       event.preventDefault()
        // this.clearCities()
        fetch(`http://127.0.0.1:3000/cities/${event.target.id}`, {
            method: 'DELETE',
            headers: {'Content-Type':'application/json',
                      'Accept': 'application/json'
                    }
        })
        .then(event.target.parentElement.remove())
            
        
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