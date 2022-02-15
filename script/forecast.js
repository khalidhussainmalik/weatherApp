// API Calls

// API Key

const key = "";

// 2 requests to 2 different endpoints

const getCity = async (city) => {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseURL + query);
    const data = await response.json();

    // console.log(data)

    return data[0];
}


// getCity('dadu')
//     .then(data => console.log(data))
//     .then(err => console.log(err))

const getWeather = async (id) => {
    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const query = `${id}?apikey=${key}`;

    const response = await fetch(baseURL + query);
    const data = await response.json();

    return data[0]

}

// Let's join the two methods together

// getCity('nawabshah')
//     .then(data => {
//         return getWeather(data.Key)
//     }).then(data => {
//         console.log(data)
//     }).then(err => {
//         console.log(err)
//     })

// update the location dynamically

// MjQiddXzSw6ggUFcK0UbX7DVN65sAIef