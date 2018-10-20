const axios = require('axios');

axios.get('https://swapi.co/api/films/1')
  .then(({ data: { characters } }) => {
    characters.forEach(url => {
      axios.get(url)
        .then(({ data: { name } }) => console.log(name))
    })
  })
