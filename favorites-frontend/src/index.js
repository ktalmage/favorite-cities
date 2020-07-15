const BASE_URL = ('http://127.0.0.1:3000')

fetch(`${BASE_URL}/states`)
.then(resp => resp.json())
.then(data => console.log(data))

console.log('index')