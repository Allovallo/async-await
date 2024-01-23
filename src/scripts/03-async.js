function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };
  return Promise.resolve(fruits[name]);
}

function makeSmoothie() {
  getFruit('apple').then(apple => {
    console.log(apple);

    getFruit('kiwi').then(kiwi => console.log(kiwi));
  });
}

makeSmoothie();
