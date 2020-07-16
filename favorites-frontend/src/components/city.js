// const BASE_URL = ('http://127.0.0.1:3000')
// const CITIES_URL = `${BASE_URL}/cities`
class City {
    constructor(cityJSON) {
       
        this.id = cityJSON.id
        this.name = cityJSON.attributes.name
        this.zipcode = cityJSON.attributes.zipcode
        this.state = cityJSON.attributes.state.name
        this.title = cityJSON.attributes.title
        this.description = cityJSON.attributes.description
        
    }
}
//     createCityCard() {
        
//         const card = document.createElement('div')
//         card.className = "card"
//         const cardInfo = document.createElement('div')
//         cardInfo.className = "card-info"
//         const stateCity = document.createElement('h1')
//         stateCity.innerHTML = this.state
//         cardInfo.appendChild(stateCity)
//         const name = document.createElement('h1')
//         name.innerHTML = this.name
//         cardInfo.appendChild(name)
//         const zipcode = document.createElement('h1')
//         zipcode.innerHTML = this.zipcode
//         cardInfo.appendChild(zipcode)
//         const title = document.createElement('h1')
//         title.innerHTML = this.title
//         cardInfo.appendChild(title)
//         const description = document.createElement('h1')
//         description.innerHTML = this.description
//         cardInfo.appendChild(description)
//         card.appendChild(cardInfo)
//         document.querySelector('#city-card-container').appendChild(card)
//     }
//     addCitiesToDom() {
//         for (let city of this.cities) {
//           city.createCityCard()
//         }
//       }
//     getCitiesLoaded() {
//         this.adapter.getCities().then(cities => this.createCities(cities)).then(() => this.addCitiesToDom())
//     }

//     createCities(cities) {
//         for (let city of cities) {
//             return new City(this.name,this.zipcode,this.title,this.description)
//         }
//     }
// }

