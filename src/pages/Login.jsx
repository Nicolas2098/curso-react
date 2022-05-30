import React from 'react';
import '../styles/Login.scss'

const Login = () => {
    return(
        <div className="login">
        <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
            
            <form action="/" className="form">
                <label for="email" className="label">Email adress</label>
                <input type="text" name="email" id="email" placeholder="example@example.com" className="input input-email"/>

                <label for="password" className="label">Password</label>
                <input type="password" name="password" id="password" placeholder="**********" className="input input-password"/>
            
                <input type="submit" value="Log in" className="primary-button login-button"/>

                <a href="/clase3.html" >Forget my password</a>
            </form>

            <button className="secondary-button">Sign up</button>
        </div>
    </div>
    );
}

export default Login;