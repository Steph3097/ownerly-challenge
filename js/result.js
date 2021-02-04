function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  };
  return null;
};

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const resultParam = params.get("result");
  const data = JSON.parse(resultParam);

  const resultSection = document.querySelector('.result-section');
  const title = resultSection.querySelector('h1');
  const subtitle = resultSection.querySelector('p');

  if (Array.isArray(data) && data.length === 0) {
    title.innerText = '0 Results';
    subtitle.innerText = 'Try starting a new search below';

  } else if (typeof data === 'object' && data !== null) {
    const details = resultSection.querySelector('.result-details');
    const name = details.querySelector('.name');
    const description = details.querySelector('.description');
    const address = details.querySelector('.address');
    const email = details.querySelector('.email');
    const phoneNumbers = details.querySelector('.phone-numbers');
    const relatives = details.querySelector('.relatives');

    title.innerText = '1 Result';
    subtitle.innerText = 'Look at the result below to see the details of the person you’re searched for.';
    name.innerText = `${data.first_name} ${data.last_name}`;
    description.innerText = data.description;
    address.innerText = data.address;
    email.innerText = data.email;

    data.phone_numbers.forEach(number => {
      phoneNumbers.innerHTML += `<a href="tel:${formatPhoneNumber(number)}">${formatPhoneNumber(number)}</a>`;
    });

    data.relatives.forEach(relative => {
      relatives.innerHTML += `<span>${relative}</span>`;
    });

    resultSection.classList.add('result-found');
    details.classList.remove('hidden');
  }

  initEmailInputListener('../pages/loading.html');
});
