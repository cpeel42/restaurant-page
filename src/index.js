import "./styles.css";
import { container as home } from "./home.js";
import { container as menu } from "./menu.js";
import { container as contact } from "./contact.js";


const content = document.querySelector('.content');

class Page {
    constructor(content, button) {
        this.button = button;
        this.content = content;
        this.handleClick();
    }
    handleClick() {
        this.button.addEventListener('click', (event) => {
            content.innerHTML = '';
            content.appendChild(this.content);
        })
    }
}

const homeObj = new Page(home, document.querySelector('.home-button'));
const menuObj = new Page(menu, document.querySelector('.menu-button'));
const contactObj = new Page(contact, document.querySelector('.contact-button'));
