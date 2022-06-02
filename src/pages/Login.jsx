import React, {useRef} from 'react';
import '@styles/Login.scss'

import logo_yard_sale from '@logos/logo_yard_sale.svg';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return(
        <div className="login">
        <div className="form-container">
            <img src={logo_yard_sale} alt="logo" className="logo"/>
            
            <form action="/" className="form" ref={form}>
                <label for="email" className="label">Email adress</label>
                <input type="text" name="email" id="email" placeholder="example@example.com" className="input input-email"/>

                <label for="password" className="label">Password</label>
                <input type="password" name="password" id="password" placeholder="**********" className="input input-password"/>

                <button className="primary-button login-button" onClick={handleSubmit}>Log in</button>
                <a href="/clase3.html" >Forget my password</a>
            </form>

            <button className="secondary-button">Sign up</button>
        </div>
    </div>
    );
}

export default Login;