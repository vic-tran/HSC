import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Announcements />
        <Navbar />
        <Slider />
        <Categories />
        <Newsletter />
    </div>
  )
}

export default Home