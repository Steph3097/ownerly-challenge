class Footer extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root 
    const shadow = this.attachShadow({mode: 'open'});

    // Create elements 
    const wrapper = document.createElement('footer');

    const text = document.createElement('p');
    text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    const footerLinks = document.createElement('div');
    footerLinks.classList.add('footer-links');

    footerLinks.innerHTML = `<a href="#">Terms</a> | <a href="#">Privacy</a>`;

    const style = document.createElement('style');
    style.textContent = `
      footer {
        padding: 14px 15px 25px;
      }
      footer p,
      footer a {
        font-family: 'HelveticaNeue', Helvetica, sans-serif;
      }
      footer p {
        font-size: 15px;
        color: #999;
        line-height: 1.3;
        margin: 0;
        font-weight: 300;
      }
      footer a {
        font-weight: bold;
        font-size: 14px;
        text-decoration: none;
      }
      .footer-links {
        text-align: center;
        padding-top: 20px; 
        color: #004A80;
      }
      @media (min-width: 768px) {
        footer {
          padding: 14px 25px;
          display: flex;
          align-items: center;
        }
        footer p {
          flex: 1;
        }
        .footer-links {
          padding: 0 0 0 40px;
        }
      }
      @media (min-width: 1440px) {
        footer {
          max-width: 1189px;
          margin: auto;
          padding: 14px 0;
        }
      }
    `;

    // Attach created elements to the shadow DOM
    wrapper.append(text, footerLinks);
    shadow.append(style, wrapper);
  }
}

// Define the new element
customElements.define('company-logo-footer', Footer);
