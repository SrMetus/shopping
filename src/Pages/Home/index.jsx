import { useState, useEffect } from 'react'
import React from 'react'
import { Card } from '../../Components/Card'
import { apiUrl } from '../../api'
import { ProductDetail } from '../../Components/ProductDetail'

const Home = () => {
  const [items, setItems] = useState(null)

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await fetch(`${apiUrl}`)
        const data = await response.json()
        console.log(data)  // debug
        setItems(data)
      } catch (err) {
        console.error(`Ocurrio un error: ${err}`)
      }
    }
    fetchData()
  }, []);

    return (
      <>
        Home
        <section className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl'>
          {
            items?.map(item => (
              <Card 
                key={item?.id} {...item}
              />
            ))
          }
        </section>
        <ProductDetail />      
      </>
    )
  }

  export default Home