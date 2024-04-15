async function fetchCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      
      const countriesSelect1 = document.getElementById('countries1');
      const countriesSelect2 = document.getElementById('countries2');

      // Sort countries alphabetically by name
      data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      
      // Loop through the fetched countries and create an option for each
      data.forEach(country => {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        option1.value = country.name.common;
        option1.textContent = country.name.common;
        option2.value = country.name.common;
        option2.textContent = country.name.common;
        countriesSelect1.appendChild(option1);
        countriesSelect2.appendChild(option2);
      });
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  // Call the fetchCountries function when the page loads
  window.onload = fetchCountries;