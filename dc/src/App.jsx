import React from 'react'
import Home from './Pages/Home'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import {
  Switch,
  Route,
} from "react-router-dom";
import Links from './Util/Links' 
const App = () => {
    return (
        <div>
           <Navbar/>
            <Banner/>
            <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            {Links
            .filter((link) => link.text !== "Home")
            .map((link) => {
                const { id, url, page } = link;
                return (
                <Route key={id} path={url}>
                    {page}
                </Route>
                );
            })}
            </Switch>
            <Footer/>
        </div>
    )
}

export default App
