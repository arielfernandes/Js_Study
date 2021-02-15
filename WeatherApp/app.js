window.addEventListener('load', () => {
    let long;
    let lat;
    let apiKey = 'abfcf8a4b818a7b5b23fb09564362022';
    let tempDescription = document.querySelector('.temperature-description');
    let tempDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temp } = data.main;
                    const name = data.name;
                    const { description, icon } = data.weather[0];
                    var iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                    // http://openweathermap.org/img/w/10d.png"
                    document.querySelector('#wicon').setAttribute('src', iconurl);

                    //convert to celsius
                    let tempCelsius = temp - 273.25;
                    //set DOM Elements from the API
                    tempDegree.textContent = Math.round(tempCelsius);
                    locationTimezone.textContent = name;
                    tempDescription.textContent = description;
                    //set icon
                });
        });

    }
   
});