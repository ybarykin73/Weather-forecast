import React from "react"
import Proxy from "../utils/proxy/Proxy"
import { castCard } from "../factory/CardFactory"

const proxy = new Proxy({
  maxSize: 10
})

const useFetch  = (id) => {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(false)

  const getFetch = async () => {
    try {
      if (proxy.has(id)) {
        const card = proxy.get(id)
        setData(card)
        return
      }

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${process.env.API_KEY}`)      
      const data = await response.json()
      const card = castCard(data)

      proxy.set(id, card)
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