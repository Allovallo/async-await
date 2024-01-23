const validJSON = '{"name": "Mango", "age": 3}';
const invalidJSON = '{бекенд повернув таке чудо}';

try {
  console.log(JSON.parse(1));
  console.log(JSON.parse(invalidJSON));
  console.log(JSON.parse(2));
} catch (error) {
  console.log(error);
  if (error.name === 'SyntaxError') {
    console.log('JSON Parse ERRORR!!! Do smth!!!');
  }
}

console.log('After try...catch');
