console.log('Hello World!');
document.getElementById('root').insertAdjacentHTML('beforeend', '<h2>Hello from Webpack!</h2>');

const sayHi = (greet, name) => console.log(`${greet}, ${name} !`);

sayHi('Hi', 'Phat Nguyen');
