import React from 'react';
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
        user_name: '',
        email: '',
        password: '',
        value:false
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
        response = await urlRegister(info);
        if( response?.data){
           
            setInfo({
                name:'',
                email: '',
                password: '',
                user_name:'',
                error: '',
                value:true
            });
            // redireccionar a login
            return <Redirect to='/login'/>;
        }
        else{
            // cambiamos el mensaje de error
            // errorMessage = response?.data;
            // alert('hola')
            setInfo({
                ...info,
                error: response?.data
            });
           // console.log(info.error, 'iiiiiiiiiiiiiiiiii')
        }
    }
  
    if(info.value) {
        console.log('segundo if')
        return <Redirect to='/login'/>;
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
                            name="name"
                            onChange={handleInputs} 
                            value={info.name}
                            required="required"/>
                            <span>Name</span>
                        </div>

                        < div className="inputbox">
                            <input 
                            type="text" 
                            name="user_name"
                            onChange={handleInputs} 
                            value={info.user_name}
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
                            <input type="submit" value="Submit"/>
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