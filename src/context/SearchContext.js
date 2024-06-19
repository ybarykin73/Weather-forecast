import React from "react";

const SearchContext = React.createContext({})

const SearchContextProvider = (props) => {
  const {
    children
  } = props

  const [searchHistory, setSearchHistory] = React.useState([])

  return (
    <SearchContext.Provider value={{searchHistory, setSearchHistory}}>
      { children }
    </SearchContext.Provider>
  )
}

export const useSearchHistory = () => {
  const { searchHistory, setSearchHistory } = React.useContext(SearchContext)

  return {
    history: searchHistory,
    setSearchHistory
  }
}

export default SearchContextProvider