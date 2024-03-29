export const castCard = (data) => {

  return {
    name: data.name,
    temp: Math.ceil(data.main.temp - 273),
    feels: Math.ceil(data.main.feels_like - 273),
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    country: data.sys.country,
    visibility: data.visibility / 1000,
    windSpeed: data.wind.speed,
    icon: icons[data.weather[0].icon.replace(/d/g, 'n')]
  }
}

const icons = {
  '01n': 'clear-sky',
  '02n': 'few-clouds',
  '03n': 'scattered-clouds',
  '04n': 'broken-clouds',
  '09n': 'shower-rain',
  '10n': 'rain',
  '11n': 'thunderstorm',
  '13n': 'snow',
  '50n': 'mist' 
}