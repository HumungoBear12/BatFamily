import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <h1 className="nav">The Bat Family</h1>
            <nav >
                <ul className='Navbar'>
                    <li className='active'><Link className='link' to="/"><h1>Home</h1></Link></li>
                    <li className='active'><Link className='link' to="/Characters"><h1>Characters</h1></Link></li>
                    <li className='active'><Link className='link' to="/Television"><h1>Television</h1></Link></li>
                    <li className='active'> <Link className='link' to="/Movies"><h1>Movies</h1></Link></li>
                    <li className='active'><Link className='link' to="/VideoGames"><h1>Video-Games</h1></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
