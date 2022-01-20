import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
     const changeActive = (page) => {
        const elems = document.getElementsByTagName('li');
        for(let i = 0; i < elems.length; i++){
            elems[i].classList.remove('active');
        }
        document.getElementById(page).classList.add('active');
    }
    return (
        <div>
            <h1 className="nav">The Bat Family</h1>
            <ul className='Navbar'>
                <li className='active' onClick={() => {changeActive('home')}} id='home'><Link className='link' to='/'><h1>Home</h1></Link></li>
                <li onClick={() => {changeActive('Characters')}} id='characters'><Link className='link' to='/characters'><h1>Characters</h1></Link></li>
                <li onClick={() => {changeActive('Television')}} id='Television'><Link className='link' to='/Television'><h1>Television</h1></Link></li>
                <li onClick={() => {changeActive('Movies')}} id='Movies'><Link className='link' to='/Movies'><h1>Movies</h1></Link></li>
                <li onClick={() => {changeActive('VideoGames')}} id='VideoGames'><Link className='link' to='/VideoGames'><h1>Video Games</h1></Link></li>
            </ul>
        </div>
    )
}

export default NavBar
