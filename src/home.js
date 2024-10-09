const container = document.createElement('div');
container.classList.add('container');

const title = document.createElement('h1');
const quote = document.createElement('p');
const hours = document.createElement('p');
const location = document.createElement('p') 



title.classList.add('title');
quote.classList.add('quote');
hours.classList.add('hours');
location.classList.add('location');

title.textContent = 'Welcome to our wonderful restaurant!';
quote.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos modi earum quae? Veritatis est natus vel maxime! Aliquam necessitatibus facilis quaerat placeat voluptatum obcaecati, debitis doloribus ratione nihil ea optio?.';
hours.textContent = 'Hours';
location.textContent = '123 Apple Street';

container.appendChild(title);
container.appendChild(quote);
container.appendChild(hours);
container.appendChild(location);

export {container};