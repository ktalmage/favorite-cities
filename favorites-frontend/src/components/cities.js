class Cities {
    constructor() {
        this.cities = []
        this.adapter = new CitiesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadNotes()
    }

    fetchAndLoadNotes() {
        this.adapter.getCities().then(cities => {
            console.log(cities)
        })
    }
}