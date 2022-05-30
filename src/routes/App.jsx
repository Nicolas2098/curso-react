//Libs
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//containers
import Layout from '../containers/Layout';
//pages
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoveryPassword from '../pages/RecoveryPassword';
import CheckOut from '../pages/CheckOut';
import CreateAccount from '../pages/CreateAccount'; 
import MyAccount from '../pages/MyAccount';
import NewPassword from  '../pages/NewPassword';
import Orders from  '../pages/Orders';
import SendEmail from  '../pages/SendEmail';

//styles
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route exact path="/check-out" element={<CheckOut />} />
                    <Route exact path="/singup" element={<CreateAccount />} />
                    <Route exact path="/account" element={<MyAccount/>} />
                    <Route exact path="/new-password" element={<NewPassword />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route exact path="/send-email" element={<SendEmail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter> 
        );
}

export default App;