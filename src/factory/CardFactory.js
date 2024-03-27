export const castCard = (card) => {
  return {
    name: card.name,
    temp: Math.ceil(card.main.temp - 273),
    feels: Math.ceil(card.main.feels_like - 273),
    humidity: card.main.humidity,
    pressure: card.main.pressure,
    country: card.sys.country,
    visibility: card.visibility / 1000,
    windSpeed: card.wind.speed
  }
}