import React from 'react';
import './Landing.css';
import { FaTwitter } from 'react-icons/fa';
import {Link} from 'react-router-dom';



export default function Landing() {
    return (
        <div className='landing'>
         
                <div className='wallpaper'>
                    <img src={require(`../img/twitter.png`).default} alt='No carga la imagen'/>
                </div>

                <div className='container__text'>
                    <div className='cont_iconTwitter'>
                        <FaTwitter/>
                    </div>

                    <div className='cont__titulo'>
                        <h1>Lo que está pasando ahora</h1>
                        <h5>Únete a Twitter ahora mismo</h5>
                    </div>
            
                    <div className='cont_botones'>
                    <Link to={`/register`}><button className="cont_register">Register</button></Link>
                        <button className="cont_login">Login</button>
                    </div>
                </div>
            
        </div>
    )
}
