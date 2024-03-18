const axios = require('axios');
const _ = require('lodash');

// Function to fetch random quote from an API
async function getRandomQuote() {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    return response.data.content;
  } catch (error) {
    throw new Error('Failed to fetch random quote');
  }
}

// Function to generate a random integer within a specified range
function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
  return _.startCase(_.toLower(str));
}

module.exports = {
  getRandomQuote,
  generateRandomInt,
  capitalizeWords
};
