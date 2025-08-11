
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Studio from './pages/studioPage/Studio'
import Preview from './pages/PreviewPage/Preview'
import {MockupProvider} from './GlobalState/MockupContext'


function App() {
  return (
    <>


      <Router>
        <MockupProvider>
            <Routes>
                <Route path='/'  element={<Home/>}/>
                 <Route path='/studio'  element={<Studio/>}/>
                 <Route path='/preview'  element={<Preview/>}/>
            </Routes>
       </MockupProvider>
      </Router>
    </>
  )
}

export default App
