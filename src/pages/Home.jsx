import React from 'react'
import Slider from '../components/Slider';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import BigBrightButton from '../components/ButtonStudio';


const Home = () => {
  return (
    <div>
        <Slider />
        <BigBrightButton to="/studio/1"/>
        <FeaturedProducts type="reduceri"/>
        <Categories />
        <FeaturedProducts type="cele mai vandute"/>
    </div>
  )
}

export default Home;