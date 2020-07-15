const BASE_URL = ('http://127.0.0.1:3000')
const CITIES_URL = `${BASE_URL}/cities`
class City {
    constuctor(name,zipcode,title,description,state) {
        this.cities = []
        this.name = name;
        this.zipcode = zipcode;
        this.title = title;
        this.description = description;
        this.state = state;
        City.all.push(this)
    }
    createCityCard() {
        const state = document.createElement('h1')
        const card = document.createElement('div')
        card.className = "card"
        const cardInfo = document.createElement('div')
        cardInfo.className = "card-info"
        const stateCity = document.createElement('h1')
        stateCity.innerHTML = this.state
        cardInfo.appendChild(stateCity)
        const name = document.createElement('h1')
        name.innerHTML = this.name
        cardInfo.appendChild(name)
        const zipcode = document.createElement('h1')
        zipcode.innerHTML = this.zipcode
        cardInfo.appendChild(zipcode)
        const title = document.createElement('h1')
        title.innerHTML = this.title
        cardInfo.appendChild(title)
        const description = document.createElement('h1')
        description.innerHTML = this.description
        cardInfo.appendChild(description)
        card.appendChild(cardInfo)
        document.getElementById('#city-card-container').appendChild(card)
    }
    addCities() {
        for (let city of this.cities) {
          recipe.createCityCard()
        }
      }
    getCities() {
        return fetch(CITIES_URL).then(resp => resp.json()).then(json => json.data)
    }
}

