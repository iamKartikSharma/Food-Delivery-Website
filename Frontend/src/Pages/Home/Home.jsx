import { useState } from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Feedback from '../../components/Feedback/Feedback'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  const [category, setcategory] = useState("All");
  return (
    <>
    <Hero />
    <Features/>
    <ExploreMenu category={category} setcategory={setcategory} />
    <FoodDisplay category ={category} />
    <Feedback/>
    <Footer/>
    </>
  )
}

export default Home