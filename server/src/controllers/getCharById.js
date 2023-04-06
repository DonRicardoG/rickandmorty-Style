const axios = require('axios')

function getCharByID(res, id){
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        const char = {
            id,
            name: response.data.name,
            status: response.data.status,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin,
            image: response.data.image,
        }
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(char))
    })
        
    .catch(error => {
        res.writeHead(500, {"Content-type":"text/plain"})
        res.end(error.message)
    })
}

module.exports = getCharByID;
