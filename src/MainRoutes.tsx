import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Domains } from './components/pages/Domains';
import { Settings } from './components/pages/Settings';
import { Logout } from './components/pages/Logout';
import { DOMAINS, HOME, LOGOUT, ROOT, SETTINGS } from './App';
import { Login } from './components/pages/Login';
import { Navigation } from './components/nav/Navigation';
import { Box } from '@mui/material';

interface Props {
    loggedIn: boolean;
}

export const MainRoutes: React.FC<Props> = (props): JSX.Element => {
    return (
        <BrowserRouter>
            {props.loggedIn ? (
                <>
                    <Navigation/>
                    <Box p={2}/>
                </>
            ) : (<></>)}
            <Routes>
                <Route path={ROOT} element={<Login/>}/>
                <Route path={HOME} element={<Home/>}/>
                <Route path={DOMAINS} element={<Domains/>}/>
                <Route path={SETTINGS} element={<Settings/>}/>
                <Route path={LOGOUT} element={<Logout/>}/>
            </Routes>
        </BrowserRouter>
    );
};
