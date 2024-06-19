import React from "react"

import SearchContextProvider from "../../context/SearchContext"

import './App.css'

import Main from "../Main/Main"
const App = () => {

  return (
    <div className="body">
      <SearchContextProvider>
        <Main />

      </SearchContextProvider>
    </div>
  )
}

export default App
