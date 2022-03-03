import React from 'react';
import './Landing.css';
import { FaTwitter } from 'react-icons/fa';
import {Link, NavLink} from 'react-router-dom';

export default function Landing() {
  const [input, setInput] = React.useState({
    IdUser: '',
});

  const handleInputs = (e) => {
    e.preventDefault();
    setInput({
        ...input,
        [e.target.name]: e.target.value 
    })
    
}

  const handleSubmit =  () => {
  window.dataLayer.push({
    'event': 'eventoDataLayerNeoDigital',
    'pasoProceso': 'CC_Confirmacion_datos_Paso7',
  });

    }

  const segurosAhorros =  () => {
    window.dataLayer.push({
    'event': 'popup_seguros',
    'pasoProceso': 'CC_Confirmacion_datos_Paso7',
    'idUsuario':input.IdUser
  });

    }

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
                        <button className="cont_login">
                            <NavLink to={`/login`}>
                                Login
                            </NavLink>
                        </button>
                        <button onClick={handleSubmit}>Patsy</button>
                        <button onClick={segurosAhorros}>Seguros de Ahorros</button>
                        <input 
                        type="text"
                        name="IdUser"
                        onChange={handleInputs} 
                        value={input.IdUser}
                        placeholder='' 
                        required
                        />
                        
                    </div>
                </div>
                <div className='querieswallpaper'>
                    <img src={require(`../img/twitter.png`).default} alt='No carga la imagen'/>
                </div>
        </div>
    )
}
