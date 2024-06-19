import React from "react"
const SearchResult = React.lazy(() => import('../SearchResult/SearchResult'))

import './SearchField.css'

const SearchField = () => {
  const [searchValue, setSearchValue] = React.useState('')

  const query = React.useDeferredValue(searchValue)

  const isStale = query !== searchValue;

  const handleChange = (e) => {
    setSearchValue(e)
  }

  return (
    <div className="search-field">
      <div className="search-field__wrapper">
        <input 
          className="search-field__input"
          type="text"
          placeholder="Bangalore"
          value={searchValue}
          onChange={e => handleChange(e.target.value)}
        />
      </div>
      
    <div style={{ opacity: isStale ? 0.3 : 1 }}>
      <React.Suspense fallback={null}>
        <SearchResult query={query} />
      </React.Suspense>
    </div>
  </div>
  )
}

export default SearchField