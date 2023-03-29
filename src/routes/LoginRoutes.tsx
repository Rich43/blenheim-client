import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { ROOT } from '../App';

export const LoginRoutes: React.FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path={ROOT} element={<Login/>}/>
        </Routes>
    );
};
