class Header extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root 
    const shadow = this.attachShadow({mode: 'open'});

    // Create elements 
    const wrapper = document.createElement('header');
    const container = document.createElement('div');
    container.classList.add('container');

    const img = document.createElement('img');
    img.src = 'https://gina-lee.com/ownerly-challenge/assets/SVGs/Logo.svg';

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = `
      <a href="#">
        <img src="http://gina-lee.com/ownerly-challenge/assets/SVGs/icn_search.svg" />
      </a>
      <a href="#">
        <img src="http://gina-lee.com/ownerly-challenge/assets/SVGs/icn_person.svg" />
      </a>
    `;

    const style = document.createElement('style');
    style.textContent = `
      header {
        padding: 20px 15px;
        position: sticky;
        top: 0;
        background-color: #004A80;
      }
      header .container {
        display: flex;
        justify-content: space-between;
      }
      header .menu a {
        margin-left: 25px;
        max-height: 23px;
      }
      @media (min-width: 1440px) {
        header {
          padding: 20px 0;
        }
        header .container {
          max-width: 980px;
          margin: auto;
        }
      }
    `;


    // Attach created elements to the shadow DOM
    // container.append(img, menu);
    wrapper.append(container);
    shadow.append(style, wrapper);
  }
}

// Define the new element
customElements.define('company-logo-header', Header);
