const container = document.createElement('div');
container.classList.add('container');

class Contact {
    constructor(name, title, number, email) {
        this.name = name;
        this.title = title;
        this.number = number;
        this.email = email;
        this.makeCard();
    };
    makeCard() {
        const card = document.createElement('div')
        card.classList.add('card');

        const nameElement = document.createElement('h2');
        nameElement.textContent = this.name;

        const titleElement = document.createElement('p');
        titleElement.textContent = this.title;

        const numberElement = document.createElement('p');
        numberElement.textContent = this.number;

        const emailElement = document.createElement('p');
        emailElement.textContent = this.email;

        card.appendChild(nameElement);
        card.appendChild(titleElement);
        card.appendChild(numberElement);
        card.appendChild(emailElement);

        container.appendChild(card);
    };
};

const chris = new Contact('Chris', 'Chef', '123-456-7890', 'email@fake.com');
const erika = new Contact('Erika', 'Owner', '987-654-3210', 'email2@fake.com');
const hazelnut = new Contact('Hazelnut', 'Waitress', '123-456-0987', 'email2@fake.com');

export {container};