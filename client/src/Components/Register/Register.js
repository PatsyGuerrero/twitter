import React, { useState,useEffect } from 'react';
import { FaTwitter } from 'react-icons/fa';
import './Register.css';
import ReactDOM from 'react-dom';
import Modal from '../../Containers/Modal';
import { IoClose } from "react-icons/io5";
import {Link} from 'react-router-dom';



const Register = (props) => {

    // const [info, setInfo] = useState({
    //     name:'',
    //     description:'',
    //     stock:'',
    //     price:'',
    //     image:''
    // })

    const Nodes= (
        <div className='center'>
            <div className='cont_modal'>
                <div className='close'>
                <Link to={`/`}><IoClose className='cont_iconTwitter'/></Link>
                </div>
                <form onSubmit >
                    <div className='cont_iconTwitter'>
                            <FaTwitter/>
                    </div>
           
                    <h1>Create your account</h1>
          
                    <div className='cont_form'>

                        <div className="inputbox">
                            <input type="text" required="required"/>
                            <span>Name</span>
                        </div>

                        < div className="inputbox">
                            <input type="text" required="required"/>
                            <span>Username</span>
                        </div>

                        <div className="inputbox">
                            <input type="text" required="required"/>
                            <span>Email</span>
                        </div>

                        <div className="inputbox">
                            <input type="text" required="required"/>
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