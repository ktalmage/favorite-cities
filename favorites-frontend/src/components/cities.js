class Cities {
    constructor() {
        this.cities = []
        this.adapter = new CitiesAdapter()
        this.bindEventListeners()
    }
}