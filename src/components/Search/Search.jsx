import React from "react"
import SearchField from "./SearchField/SearchField"
import SearchHistory from "./SearchHistory/SearchHistory"

import './Search.css'

const Search = () => {

  return (
    <div className='search'>
      <SearchField />
      <SearchHistory />
    </div>
  )
}

export default Search