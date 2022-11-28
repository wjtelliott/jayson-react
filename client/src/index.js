/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './Components/404/Page404';
import LandingPage from './Components/Home/LandingPage';
import NavBar from './Components/Shared/NavBar';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_AUTH_CLIENTID;
root.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={`${window.location.origin}/authorize`}
    >
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={<LandingPage />}
                />
                <Route
                    path="*"
                    element={<Page404 />}
                />
            </Routes>
        </BrowserRouter>
    </Auth0Provider>
);

//!reportWebVitals() here
