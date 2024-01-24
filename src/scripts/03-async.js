const { log } = require('handlebars/runtime');

function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(fruits[name]), 500),
  );
}

async function aMakeSmoothie() {
  try {
    console.time('aMakeSmoothie');
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const berry = getFruit('strawberry');

    const fruits = await Promise.all([apple, kiwi, berry]);
    console.log(fruits);

    return fruits;
    console.timeEnd('aMakeSmoothie');
  } catch (error) {
    console.log('ПОМИЛКА: ' + error);
  }
}

aMakeSmoothie().then(fruits => console.log(fruits));
