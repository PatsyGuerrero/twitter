import React, { useState,useEffect } from 'react';
import { FaTwitter } from 'react-icons/fa';
import './Register.css';
import ReactDOM from 'react-dom';
import Modal from '../../Containers/Modal';
import { IoClose } from "react-icons/io5";
import {Link, Redirect} from 'react-router-dom';
import { urlRegister } from '../../Conections/url';




const Register = (props) => {

    let response;

    const [info, setInfo] = React.useState({
        name: '',
        username: '',
        email: '',
        password: '',
    });

    const handleInputs = (e) => {
        e.preventDefault();
        setInfo({
            ...info,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        response = await urlRegister(info.name, info.username,info.email, info.password);
        //console.log(typeof response?.data, 'oooo');
        if( response?.data){
            setInfo({
                name:'',
                email: '',
                password: '',
                error: ''
            });
            // redireccionar a home
            return <Redirect to='http://localhost:3000/login' />;
        }
        else{
            // cambiamos el mensaje de error
            // errorMessage = response?.data;
            // alert('hola')
            setInfo({
                ...info,
                error: response?.data
            });
            console.log(info.error, 'iiiiiiiiiiiiiiiiii')
        }
    }

    const Nodes= (
        <div className='center'>
            <div className='cont_modal'>
                <div className='close'>
                <Link to={`/`}><IoClose className=''/></Link>
                </div>
                <form onSubmit={handleSubmit} >
                    <div className='cont_iconTwitter'>
                            <FaTwitter/>
                    </div>
           
                    <h1>Create your account</h1>
          
                    <div className='cont_form'>

                        <div className="inputbox">
                            <input 
                            type="text"
                            name="email"
                            onChange={handleInputs} 
                            value={info.email}
                            required="required"/>
                            <span>Name</span>
                        </div>

                        < div className="inputbox">
                            <input 
                            type="text" 
                            name="username"
                            onChange={handleInputs} 
                            value={info.username}
                            required="required"/>

                            <span>Username</span>
                        </div>

                        <div className="inputbox">

                            <input 
                            type="text" 
                            name="email"
                            onChange={handleInputs} 
                            value={info.email}
                            required="required"/>

                            <span>Email</span>
                        </div>

                        <div className="inputbox">

                            <input 
                            type="password" 
                            name="password"
                            onChange={handleInputs} 
                            value={info.password}
                            required="required"/>
                            
                            <span>Password</span>
                        </div>
            
                        <div className="inputbox">
                            <input type="button" value="Submit"/>
                        </div>
                    </div>

                </form>
            </div>
       </div>
    )

    const{modal}= props;

    if (!modal) {
        return Nodes
    }

    return ReactDOM.createPortal(<Modal>{Nodes}</Modal>, document.getElementById('modal-root'));
}

export default Register;