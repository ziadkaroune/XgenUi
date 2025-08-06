
import { BrowserRouter as Router , Route , Routes ,Link } from 'react-router-dom'
import '../../styles/App.css' 
import Header from '../../Header'
import HeroSection from './HomeSections/HeroSection'
function Home() {
 

  return (
    <>
      <Header/>
      <main>
        <HeroSection />
      </main>
    </>
  )
}

export default Home
