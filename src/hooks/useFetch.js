import React from "react"

import { castCard } from "../factory/CardFactory"

const useFetch  = (id) => {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(false)

  const getFetch = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${process.env.API_KEY}`)      
      const data = await response.json()
      const card = castCard(data)
      setData(card)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }

  React.useEffect(() => {
    let ignore = false

    if (id && !ignore) {
      getFetch()
    }

    return () => {
      ignore = true
    }
    
  }, [id])

  return {
    data,
    error
  } 
}

export default useFetch