import React from 'react'

import MainContext from '../../context/MainContext'

import './SearchResult.css'

import cityList from '../../json/city.list.json'

const SearchResult = ({query}) => {

  if(!query || query.length <= 2) {
    return null
  }

  const list = cityList.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))

  if(!list.length) {
    return <p>Нет такого города</p>
  }

  const setId = React.useContext(MainContext)

  return (
    <ul className="search-result">
      {
        list.map(item => {
          return (
            <li key={item.id} className='search-result__item'>
              <button 
                onClick={() => setId(item.id)}
                className='search-result__button'
              >
                {item.name}, {item.country}
              </button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default React.memo(SearchResult)