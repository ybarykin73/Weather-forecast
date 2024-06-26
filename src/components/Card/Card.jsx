import './Card.css'

const Card = (props) => {
  const {
    icon,
    name,
    temp,
    feels,
    humidity,
    pressure,
    country,
    visibility,
    windSpeed,
  } = props

  return (
    <div className="card">
      <div 
        className='card__background'
        style={{backgroundImage: `url(./assets/images/${icon || 'sun'}.jpg)`}}
      />
      <div className='card__main'>
        <h1 className='card__name'>
          {
            !name ? 'Введите название города' : <>{name}, {country}</>
          }
        </h1>
        <div className='card__temperature'>{temp}<sup>0</sup><span>C</span></div>
        <ul className='card__list'>
          <li className='card__list-item'>Чувствуется как <span>{feels}</span></li>
          <li className='card__list-item'>Давление <span>{pressure} мм.рт.ст</span></li>
          <li className='card__list-item'>влажность <span>{humidity} %</span></li>
          <li className='card__list-item'>Видимость <span>{visibility} км</span></li>
          <li className='card__list-item'>Скорость ветра <span>{windSpeed} мс</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Card