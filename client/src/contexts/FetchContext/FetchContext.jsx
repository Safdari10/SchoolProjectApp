

import React, { Children, createContext, useContext, useState } from 'react'

const FetchContext = createContext()


export const FetchProvider = ({ children }) => {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

const fetchData = async(endPoint, id) => {
    try {
        setLoading(true)
        setData(null)
        setError(null)
        const url = id ? `${endPoint}/${id}` : endPoint
        const response = await fetch(url)
        
        if (!response.ok) {
            throw new Error("Data Fetch failed")
        }
       
        const result = await response.json()
        setData(result)

    } catch (error) {
        setError(error)
    } finally {
        setLoading(false)
    }
}


  return (
    <FetchContext.Provider value={{ data, loading, error, fetchData}} >
      {children}
    </FetchContext.Provider>
  )
}

export const useFetch = () => useContext(FetchContext)

