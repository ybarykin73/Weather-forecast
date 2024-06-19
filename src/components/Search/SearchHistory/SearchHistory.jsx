import React from "react"
import CardMini from "../../Card/CardMini/CardMini"

import { useSearchHistory } from "../../../context/SearchContext"

import './SearchHistory.css'

const SearchHistory = () => {

  const { history } = useSearchHistory()

  return (
    <div className="search-history">
      <ul className="search-history__list">
        {
          history.slice(-6).reverse().map(item => (
            <li key={item.name} className="search-history__list-item">
              <CardMini {...item} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default React.memo(SearchHistory)
