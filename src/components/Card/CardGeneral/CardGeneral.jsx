import './CardGeneral.css'

const CardGeneral = () => {
  return (
    <div className="card-general">
      <div className="card-general__header">
        <div className="card-general__image">
          <img
            className='card-general__img'
            width={169}
            height={132}
            src="../../assets/images/cloudy.png"
            alt=""
          />
        </div>
        <div className='card-general__temperature'>
          <span className='card-general__temperature--max'>23</span>
          /
          <span className='card-general__temperature--min'>17</span>
        </div>
        <ul className="card-general__feature">
          <li className='card-general__feature-item'>
            <img width={24} height={24} className='card-general__feature-image' src="../../assets/images/precipitation.png" alt="Precipitation" />
            <b>30%</b>
            <p className='card-general__feature-name'>Precipitation</p>
          </li>
          <li className='card-general__feature-item'>
            <img width={24} height={24} className='card-general__feature-image' src="../../assets/images/humidity.png" alt="Humidity" />
            <b>20%</b>
            <p className='card-general__feature-name'>Humidity</p>
          </li>
          <li className='card-general__feature-item'>
            <img width={24} height={24} className='card-general__feature-image' src="../../assets/images/wind-speed.png" alt="Wind Speed" />
            <b>9km/h</b>
            <p className='card-general__feature-name'>Wind Speed</p>
          </li>
        </ul>
      </div>
      <ul className="card-general__list">
        <li className="card-general__list-item">
          <div className="card-general__list-name">
            Monday
          </div>
          <div className="card-general__list-image">
            <img className='card-general__list-img' width={51} height={40} src="../../assets/images/cloudy.png" alt="" />
            <span>Sunny</span>
          </div>
          <div className="card-general__list-temperature">
            <span>+31 </span>
            <span>+51</span>
          </div>
        </li>
        <li className="card-general__list-item">
          <div className="card-general__list-name">
            Tuesday
          </div>
          <div className="card-general__list-image">
            <img className='card-general__list-img' width={51} height={40} src="../../assets/images/cloudy.png" alt="" />
            <span>Sunny</span>
          </div>
          <div className="card-general__list-temperature">
            <span>+31 </span>
            <span>+51</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CardGeneral
