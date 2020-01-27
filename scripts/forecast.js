const key = 'gBhrPhu5XWkW9FtvKg5K3zIjaEPQmK4r';

const getTemp = async (idCity) =>{

    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${idCity}?apikey=${key}`;

    const response = await fetch(baseURL + query);
    const data = await response.json();

    return data[0];

}

const getCity = async (city) => {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;


    const response = await fetch(baseURL + query);
    const data = await response.json();

    return data[0];    
}

