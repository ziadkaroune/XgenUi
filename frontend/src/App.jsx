
import { BrowserRouter as Router , Route , Routes ,Link } from 'react-router-dom'
 
import Home from './pages/HomePage/Home'
import Studio from './pages/studioPage/Studio'
function App() {
 

  return (
    <>
      <Router>
        <Routes>
            <Route path='/'  element={<Home/>}/>
            <Route path='/studio'  element={<Studio/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
