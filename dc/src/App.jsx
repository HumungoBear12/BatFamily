import React from 'react'
import Home from './Pages/Home'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Character from './Pages/Characters'
import VideoGames from './Pages/VideoGames'
import Television from './Pages/Television'
import Movies from './Pages/Movies'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = () => {
    return (
           <div>
               <Router>
                    <div>
                        <NavBar />
                        <p style={{height: '10vh'}} />
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path='Characters' element={(<Character/>)} />
                            <Route path='Television' element={(<Television/>)} />
                            <Route path='Movies' element={(<Movies/>)} />
                            <Route path='VideoGames' element={(<VideoGames/>)} />
                        </Routes>
                    </div>
                    <Banner/>
                <Footer/>
                </Router>
           </div>
    )
}

export default App
