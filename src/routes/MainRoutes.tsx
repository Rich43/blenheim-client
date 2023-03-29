import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Domains } from '../components/pages/Domains';
import { Settings } from '../components/pages/Settings';
import { Logout } from '../components/pages/Logout';
import { DOMAINS, HOME, LOGOUT, SETTINGS } from '../App';

export const MainRoutes: React.FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path={HOME} element={<Home/>}/>
            <Route path={DOMAINS} element={<Domains/>}/>
            <Route path={SETTINGS} element={<Settings/>}/>
            <Route path={LOGOUT} element={<Logout/>}/>
        </Routes>
    );
};
