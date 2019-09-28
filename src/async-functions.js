
const superagent = require('superagent')
const getTatooineResidents = () => {
    // console.log(superagent.get('https://swapi.co/api/planets/1/'))
    const residents = superagent
        .get('https://swapi.co/api/planets/1/')
        .then(response => response.body)
        .then(planet => planet.residents)
        .catch(err =>{
            console.log(err)
        })
    return residents
}
module.exports = {
    getTatooineResidents
}