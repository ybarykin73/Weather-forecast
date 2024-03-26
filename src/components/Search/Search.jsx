import React from "react"

import './Search.css'

const Search = () => {
  const [searchValue, setSearchValue] = React.useState('')

  const handleSearch = () => {
    console.log(searchValue)
  }

  return (
    <div className="search">
      <input 
        className="search__input"
        type="text"
        placeholder="Enter sity name"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <button 
        className="search__button"
        onClick={handleSearch}
      >
        <svg 
          enableBackground="new 0 0 32 32"
          width="26px"
          height="26px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <path d="M13,2C6.935,2,2,6.935,2,13s4.935,11,11,11s11-4.935,11-11S19.065,2,13,2z M13,22c-4.962,0-9-4.037-9-9 c0-4.962,4.038-9,9-9c4.963,0,9,4.038,9,9C22,17.963,17.963,22,13,22z"/>
            <path d="M29.707,28.293l-6.001-6c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l6.001,6C28.488,29.902,28.744,30,29,30 s0.512-0.098,0.707-0.293C30.098,29.316,30.098,28.684,29.707,28.293z"/>
          </g>
        </svg>
      </button>
    </div>
  )
}

export default Search