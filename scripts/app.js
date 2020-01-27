const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) =>{
    //const cityDets  = data.cityDets;
    //const weather = data.weather;

    // inna opcja zapisu
    console.log(data);
    const {cityDets, weather, GeoPosition} = data;

    details.innerHTML = `
     <h5 class="my-3">${cityDets.EnglishName}</h5>
     <h3 class="my-3">${cityDets.GeoPosition.Latitude}/${cityDets.GeoPosition.Longitude}</h3>
     <div class="my-3">${weather.WeatherText}</div>
     <div class="display-4 my-4">
     <span>${weather.Temperature.Metric.Value}</span>
     <span>&deg;C</span>
     
    `;


    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);




    let timeSrc = null;

    if(weather.IsDayTime){
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }

    time.setAttribute('src', timeSrc);

    



    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    };

}



const updateCity = async (city) => {
     
    const cityDets = await getCity(city);
    const weather = await getTemp(cityDets.Key);
    const GeoPosition = await getCity(cityDets.GeoPosition);

    return {
        cityDets: cityDets,
        weather: weather,
        GeoPosition: GeoPosition
    }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

})