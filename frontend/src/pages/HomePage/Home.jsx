
import { BrowserRouter as Router , Route , Routes ,Link } from 'react-router-dom'
import '../../styles/App.css' 
import Header from '../../Header'
import HeroSection from './HomeSections/HeroSection'
import Footer from '../../Footer'
function Home() {
 

  return (
    <>
      <Header home />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  )
}

export default Home
