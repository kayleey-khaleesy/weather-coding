
    function displayDateTime() {
      const now = new Date();
      const options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };
      const formattedDateTime = now.toLocaleString('en-US', options);
      document.getElementById('date-time').innerText = formattedDateTime;
    }
    setInterval(displayDateTime, 60000);
    displayDateTime();
  </script>

  <script>
    function displayTemperature(response) {
      let temperature = Math.round(response.data.temperature.current);
      let city = response.data.city;
      let currentTemperatureElement = document.querySelector(".current-temperature-value");
      currentTemperatureElement.innerHTML = `${temperature}`;
      let currentCityElement = document.querySelector("#current-city");
      currentCityElement.innerHTML = city;
    }
   
    function search(event) {
      event.preventDefault();
      let searchInputElement = document.querySelector("#search-input");
      let city = searchInputElement.value;
      let apiKey = "4aat6f9bf307foea56a57a2f7cc92439";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(displayTemperature);
    }

    document.getElementById('search-form').addEventListener("submit", search);
  
