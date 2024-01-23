async function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };
  return Promise.resolve(fruits[name]);
}

getFruit().then(console.log());
