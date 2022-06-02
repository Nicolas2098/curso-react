import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
    return (
        <div className="login">
                <div className="form-container">
                    <h1 className="title">My account</h1>
                    
                    <form action="/" className="form">
                        <label for="name" className="label">Name</label>
                        <input type="text" name="name" id="name" placeholder="Example" className="input input-name"/>

                        <label for="email" className="label">Email adress</label>
                        <input type="text" name="email" id="email" placeholder="example@example.com" className="input input-email"/>

                        <label for="password" className="label">Password</label>
                        <input type="password" name="password" id="password" placeholder="**********" className="input input-password"/>
                    
                        <input type="submit" value="Create" className="primary-button login-button"/>
                    </form>
                </div>
            </div>
    );
};

export default MyAccount;