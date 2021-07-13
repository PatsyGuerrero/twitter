import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { urlLogin } from '../../Conections/url';
import { FaTwitter } from 'react-icons/fa';
// import { addCountry, deleteLittleCard, getIds } from '../../actions/actions';
// import LittleCard from '../LittleCard/LittleCard';
import './Login.css'; 
// let stado = [];

function Login() {
    let response;
    const [input, setInput] = React.useState({
        email: '',
        password: '',
        token: false,
        error: ''
    });

    // +++ ojo+++
    const handleInputs = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        })
        
    }
    
    const handleSubmit = async (e) => {
     
        e.preventDefault();
        
        response = await urlLogin(input.email, input.password);
        // console.log(typeof response?.data, 'oooo');
        //console.log('response data', response?.data);
        localStorage.setItem(`token`, JSON.stringify(response.data.token));
        localStorage.setItem(`email`, JSON.stringify(response.data.email));
        if(typeof response?.data === 'object'){
            setInput({
                email: '',
                password: '',
                token: true,
                error: ''
            });
            // redireccionar a home
            return <Redirect to='/home' />;
        }
        else{
            // cambiamos el mensaje de error
            // errorMessage = response?.data;
            // alert('hola')
            setInput({
                ...input,
                error: response?.data
            });
        }
    }

    // datos del componente
    if(input.token){
        return <Redirect to='/home'/>;
    }

    return (
        <div className='cont_principal'>
            <Link to={`/`}>
                <div className='cont_iconTwitter'>
                        <FaTwitter/>
                </div>
            </Link>
           
            <h1>Login</h1>

        <div className='cont_form'>
            <form onSubmit={handleSubmit} >

                    <div className="inputbox">

                        <input 
                        type="text"
                        name="email"
                        onChange={handleInputs} 
                        value={input.email}
                        placeholder='' 
                        required
                        />
                        <span>Name</span>

                    </div>

                    <div className="inputbox">
                        <input 
                        type="text" 
                        name="password" 
                        onChange={handleInputs} 
                        value={input.password} 
                        placeholder='' 
                        required
                        />
                        <span>Password</span>
                    </div>

                    <div className="inputbox">
                        <input type="submit"  value="Submit"/>
                    </div>
             
                </form>
            
            <div >{input.error}</div>
            
            </div>
        </div>
    );
}

export default Login;