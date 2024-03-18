# loginovy

Loginovy is a versatile Node.js module containing various useful functions.

## Installation

You can install the module using npm: `npm install loginovy`

## Usage

```javascript
const multitool = require('multitool');

// Get a random quote
multitool.getRandomQuote().then(quote => {
  console.log('Random Quote:', quote);
});

// Generate a random integer
console.log('Random Integer:', multitool.generateRandomInt(1, 100));

// Capitalize words in a string
console.log('Capitalized String:', multitool.capitalizeWords('hello world'));
```

