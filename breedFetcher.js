const request = require("request");

const breedFetcher = function(breed) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {

    if (error) {
      console.log('Error details: ');
    }

    const data = JSON.parse(body);
    if (!data.length) {
      console.log('Breed not found');
    } else {
      console.log(data[0].description);
    }
  });
};

breedFetcher(process.argv[2]);