import React, { useState } from 'react'
import axios from './axios.ts'

interface RowProps {
    title: string,
    fetchUrl: {}
}

const Row: React.FC<RowProps> = ({ title ,fetchUrl}) => {

    const [movies, setMovies] = useState([])

    useEffect: React.useEffect(() => {
      async function fetchData() {
        const request = await axios.get(fetchUrl)

      }

      fetchData()
    }, [])

  return (
    <div>
        <h2>{title }</h2> 

       
    </div>
  )
}

export default Row