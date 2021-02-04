async function fetchEmail(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const emailParam = params.get("email");
  const url = `https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${emailParam}`

  fetchEmail(url)
    .then(data => location.href = `../pages/result.html?result=${JSON.stringify(data)}`);
});
