import React from 'react'

import './SearchResult.css'

import cityList from '../../json/city.list.json'

const SearchResult = ({query}) => {

  if(!query) {
    return null
  }

  const list = cityList.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))

  if(!list.length) {
    return <p>Нет такого города</p>
  }

  return (
    <ul className="search-result">
      {
        list.map(item => {
          return (
            <li key={item.id} className='search-result__item'>{item.name}, {item.country}</li>
          )
        })
      }
    </ul>
  )
}

export default React.memo(SearchResult)