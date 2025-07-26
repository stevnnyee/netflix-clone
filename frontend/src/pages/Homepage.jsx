import React from 'react'
import Hero from '../components/Hero'
import CardList from '../components/CardList'

const Homepage = () => {
  return (
    <div className='p-5'>
        <Hero/>
        <CardList/>
        <CardList/>
        <CardList/>
    </div>
  )
}

export default Homepage