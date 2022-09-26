const request = require("request");

const fetchBreedDescription = function(breed, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {

    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);
    if (!data.length) {
      callback('Breed not found', null);
    } else {
      callback(null, data[0].description);
    }
  });

};

module.exports = { fetchBreedDescription };