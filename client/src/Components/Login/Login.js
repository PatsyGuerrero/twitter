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
    // let { countries, ids } = state.create;
    const [input, setInput] = React.useState({
        email: '',
        password: '',
        token: false,
        error: ''
    });
   

    // +++ ojo+++
    const handleInputs = (e) => {
        e.preventDefault();
        console.log('hola');
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        })
        
    }
    
    const handleSubmit = async (e) => {
        console.log('Fran');
        e.preventDefault();
        response = await urlLogin(input.email, input.password);
        // console.log(typeof response?.data, 'oooo');
        console.log('response data', response?.data);
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
            return <Redirect to='http://localhost:3000/home' />;
        }
        else{
            // cambiamos el mensaje de error
            // errorMessage = response?.data;
            // alert('hola')
            setInput({
                ...input,
                error: response?.data
            });
            console.log(input.error, 'iiiiiiiiiiiiiiiiii')
        }
    }

    // datos del componente
    if(input.token){
        return <Redirect to='/home'/>;
    }

    return (
        <div className=''>
            
            
            <Link to={`/`}>
                <div className='cont_iconTwitter'>
                        <FaTwitter/>
                </div>
            </Link>
           
            <h1>Login</h1>

            <form onSubmit={handleSubmit} >

                <div className='cont_form'>

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
                </div>
            </form>

            <div >gggg{input.error}</div>
        </div>
    );
}

export default Login;