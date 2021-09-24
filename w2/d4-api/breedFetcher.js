
const request = require('request');

let searchTerm = process.argv[2]

request(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, function (error, response, body) {

  if (error) {
    return console.log('Sorry')
  }; // Print the error if one occurred


  let parsed = JSON.parse(body);
  let breed = parsed[0]
  if (!breed) {
    return console.log('Does Not Exist')

  }

  console.error('error:', error); // Print the error if one occurred

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  console.log('body:', breed.description); // Print the HTML for the Google homepage.
});
