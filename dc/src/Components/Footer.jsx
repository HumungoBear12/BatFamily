import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerHolder">
                <div>
                    <ul className="contact">
                        <li className='FootCon'><h1>Andrew Makris</h1></li>
                        <li className='FootCon'><p>623-806-9966</p></li>
                        <li className='FootCon'><p>amakris03@gmail.com</p></li>
                        <li className='FootCon'><a href="https://github.com/Amakris12"><p>Github</p></a></li>
                        <li className='FootCon'><a href="https://app.netlify.com/teams/amakris03/sites"><p>Netlify</p></a></li>
                    </ul>
                </div>
            <div>
                <ul className="Socials">
                <li className='FootSocial'><h1>Social Medias</h1></li>
                <li className='FootSoc'><a href=""><p>Instagram</p></a></li>
                <li className='FootSoc'><a href=""><p>Twitter</p></a></li>
                <li className='FootSoc'><a href=""><p>TikTok</p></a></li>
                <li className='FootSoc'><a href=""><p>SnapChat</p></a></li>
            </ul>
            </div>
            <div>
                <ul className="Links">
                <li className='FootNav'><h1>Navigation</h1></li>
                <li className='FootLinks'><Link to="/"><p>Home</p></Link></li>
                <li className='FootLinks'><Link to="/Characters"><p>Characters</p></Link></li>
                <li className='FootLinks'><Link to="/Television"><p>Television</p></Link></li>
                <li className='FootLinks'><Link to="/Movies"><p>Movies</p></Link></li>
                <li className='FootLinks'><Link to="/Video-Games"><p>Video-Games</p></Link></li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer
