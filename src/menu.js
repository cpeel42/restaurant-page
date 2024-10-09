const container = document.createElement('div');
container.classList.add('container');

class Item {
    constructor(name, description, price, picture) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.picture = picture;
        this.makeCard();
    };
    makeCard() {
        const card = document.createElement('div')
        card.classList.add('card');

        const nameElement = document.createElement('h2');
        nameElement.textContent = this.name;

        const titleElement = document.createElement('p');
        titleElement.textContent = this.description;

        const numberElement = document.createElement('p');
        numberElement.textContent = this.price;

        const emailElement = document.createElement('img');
        emailElement.textContent = this.picture;

        card.appendChild(nameElement);
        card.appendChild(titleElement);
        card.appendChild(numberElement);
        card.appendChild(emailElement);

        container.appendChild(card);
    };
};

const tea = new Item('Tea', 'Orange Pekoe Tea with Milk and Sugar', '$2', 'placeholderImage')
const bagel = new Item('Bagel', 'Jalapeno Bagel with Cream Cheese', '$3', 'placeholderImage')

export {container};