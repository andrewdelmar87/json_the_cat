const request = require('request');

const breedDescrip = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response) => {
    if (error) {
      return callback(error, null);
    }
    if (response.body === '[]') {
      return callback('ERROR: Breed Not Found', null);
    }
    const data = JSON.parse(response.body);
    callback(null, data[0].description);
  });
};
const breedName = process.argv[2];

breedDescrip(breedName, (error, description) => {
  console.log(description);
});