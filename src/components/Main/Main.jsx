import React from "react"

import Search from "../Search/Search"
import Card from "../Card/Card"

import MainContext from "../../context/MainContext"

import useFetch from "../../hooks/useFetch"

import './Main.css'

const Main = () => {
  const [id, setId] = React.useState()
  const {data, error} = useFetch(id)

  return (
    <MainContext.Provider value={setId}>
      <main className="main">
        <Search key={id} />
        <Card {...data} />
      </main>
    </MainContext.Provider>
  )
}

export default Main